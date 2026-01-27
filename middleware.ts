import { NextResponse, NextRequest } from "next/server";

// Canonical host enforcement (production only)
const CANONICAL_HOST = "www.mseprinting.com";
const BARE_HOST = "mseprinting.com";

function normalizePath(p: string) {
  const collapsed = p.replace(/\s+/g, " ").trim();
  const noLeading = collapsed.replace(/^\/+/, "");
  const segments = noLeading
    .split("/")
    .filter(Boolean)
    .map(encodeURIComponent);
  return "/" + segments.join("/");
}

export function middleware(req: NextRequest) {
  const url = new URL(req.url);

  // 1) Enforce https + www for the real domain only (avoid breaking preview/staging hosts)
  const host = (req.headers.get("host") || url.host || "").toLowerCase();
  const isProdHost = host === BARE_HOST || host === CANONICAL_HOST;

  if (isProdHost) {
    const proto = (
      req.headers.get("x-forwarded-proto") || url.protocol.replace(":", "")
    ).toLowerCase();

    const needsHttps = proto !== "https";
    const needsWww = host === BARE_HOST;

    if (needsHttps || needsWww) {
      const redirectUrl = new URL(req.url);
      redirectUrl.protocol = "https:";
      redirectUrl.host = CANONICAL_HOST;
      return NextResponse.redirect(redirectUrl, 308);
    }
  }

  // 2) Normalize path (spaces, encoding, etc.)
  const cleanPath = normalizePath(url.pathname);

  if (cleanPath !== url.pathname) {
    url.pathname = cleanPath;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
