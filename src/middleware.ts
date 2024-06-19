import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "es", "ru"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ru|en|es)/:path*"],
};
