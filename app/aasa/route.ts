// Apple App Site Association (AASA) for iOS universal links.
// Served at /.well-known/apple-app-site-association via a rewrite in
// next.config.mjs, with Content-Type: application/json, HTTP 200, and no
// redirect. Content is byte-for-byte the file provided by the app team;
// do not reformat.
export const dynamic = "force-static";

const AASA = `{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appIDs": ["3A6VA3MT37.com.fitviyo.app"],
        "appID": "3A6VA3MT37.com.fitviyo.app",
        "paths": ["/w/*"],
        "components": [
          {
            "/": "/w/*",
            "comment": "Shared workout links open in the Fitviyo app"
          }
        ]
      }
    ]
  },
  "webcredentials": {
    "apps": ["3A6VA3MT37.com.fitviyo.app"]
  }
}
`;

export function GET() {
  return new Response(AASA, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
