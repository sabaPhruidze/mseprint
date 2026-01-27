import { NextResponse, NextRequest } from "next/server";

const CANONICAL_HOST = "www.mseprinting.com";
const BARE_HOST = "mseprinting.com";

export function middleware(req: NextRequest) {
  const url = new URL(req.url);

  const host = (req.headers.get("host") || url.host || "").toLowerCase();
  const isProdHost = host === BARE_HOST || host === CANONICAL_HOST;

  if (!isProdHost) return NextResponse.next();

  const proto =
    (req.headers.get("x-forwarded-proto") || url.protocol.replace(":", "")).toLowerCase();

  const needsHttps = proto !== "https";
  const needsWww = host === BARE_HOST;

  if (needsHttps || needsWww) {
    const redirectUrl = new URL(req.url);
    redirectUrl.protocol = "https:";
    redirectUrl.host = CANONICAL_HOST;
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
