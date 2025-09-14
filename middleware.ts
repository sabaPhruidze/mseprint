import { NextResponse, NextRequest } from "next/server";

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

  const cleanPath = normalizePath(url.pathname);

  if (cleanPath !== url.pathname) {
    url.pathname = cleanPath;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
   
    '/((?!_next|api|.*\\..*).*)',
  ],
};