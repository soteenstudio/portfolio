import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

/** Memilih bahasa dari header Accept-Language, fallback ke bahasa default. */
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const code = part.trim().split(";")[0]?.toLowerCase().slice(0, 2) ?? "";
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
