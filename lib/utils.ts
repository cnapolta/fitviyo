export type ClassValue = string | number | null | undefined | false;

// Minimal className joiner (project isn't shadcn/clsx-based).
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
