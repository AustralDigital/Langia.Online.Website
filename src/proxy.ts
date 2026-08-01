import { NextResponse, type NextRequest } from "next/server";

import { isSiteLanguage } from "@/lib/language";

function preferredLanguage(request: NextRequest) {
  const preferences = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const languages = preferences
    .split(",")
    .map((item) => item.trim().split(";")[0]?.split("-")[0] ?? "");
  return languages.find(isSiteLanguage) ?? "es";
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${preferredLanguage(request)}`, request.url), 307);
  }

  const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0] ?? "es";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-langia-locale", isSiteLanguage(firstSegment) ? firstSegment : "es");

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
