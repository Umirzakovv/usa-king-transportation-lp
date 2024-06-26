import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "es", "ru"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
  });
