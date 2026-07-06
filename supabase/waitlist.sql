-- ─────────────────────────────────────────────────────────────
-- Fitviyo — waitlist table + RLS (TECH.md §4, LANDING.md §5)
-- Run this in the Supabase SQL editor.
--
-- Security model: RLS allows the anon role to INSERT only. There is NO
-- SELECT policy, so nobody (not even with the anon key) can read/harvest
-- emails. The landing API route inserts with the anon key, gated behind
-- Cloudflare Turnstile + honeypot + IP rate-limiting.
-- ─────────────────────────────────────────────────────────────

-- Case-insensitive email type (so Foo@x.com == foo@x.com for uniqueness).
create extension if not exists citext;

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(), -- client-generated UUID
  email       citext not null unique,
  referrer    text,                 -- ref_code of the inviter, if any
  ref_code    text unique,          -- this signup's own shareable code
  position    bigint,               -- optional queue position (fill later)
  confirmed   boolean not null default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

comment on table public.waitlist is 'Pre-launch email waitlist. anon INSERT only, no SELECT.';

-- Keep updated_at fresh on any update.
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_waitlist_updated_at on public.waitlist;
create trigger trg_waitlist_updated_at
  before update on public.waitlist
  for each row execute function public.set_updated_at();

-- ── Row-Level Security ──────────────────────────────────────────
alter table public.waitlist enable row level security;

-- Anonymous visitors may INSERT a signup. No USING clause (that's for
-- read/update/delete); WITH CHECK (true) permits the insert itself.
drop policy if exists "anon_insert_only" on public.waitlist;
create policy "anon_insert_only"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Deliberately NO select/update/delete policies → those are denied for anon.
-- (The service_role key, used only server-side/never in this app, bypasses RLS
--  for admin/export.)

-- Revoke broad table grants, then grant exactly INSERT to anon.
revoke all on public.waitlist from anon, authenticated;
grant insert on public.waitlist to anon;

-- ── Public COUNT-only RPC (LANDING.md §5) ───────────────────────
-- Returns just the number of signups (never rows/emails). SECURITY DEFINER
-- so it can count under RLS; only exposes an integer.
create or replace function public.waitlist_count()
returns bigint
language sql
security definer
set search_path = public
as $$
  select count(*) from public.waitlist;
$$;

revoke all on function public.waitlist_count() from public;
grant execute on function public.waitlist_count() to anon;

-- ── Verify ──────────────────────────────────────────────────────
-- select public.waitlist_count();            -- should work with anon key
-- select * from public.waitlist;             -- should be DENIED for anon
