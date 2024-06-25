import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { FC } from "react";

const Navbar = () => {
  const t = useTranslations("Header");
  return (
    <nav>
      <ul className="flex justify-between items-center gap-10 max-lg:gap-5 max-md:gap-3 ">
        <li>
          <Link
            href="#home"
            className="text-main_brown font-medium bg-text hover:text-[#6e5e5183] max-lg:text-sm max-md:text-xs"
          >
            {t("Navbar.home")}
          </Link>
        </li>
        <li>
          <Link
            href="#about-us"
            className="text-main_brown font-medium bg-text hover:text-[#6e5e5183] max-lg:text-sm max-md:text-xs"
          >
            {t("Navbar.aboutUs")}
          </Link>
        </li>
        <li>
          <Link
            href="#for-drivers"
            className="text-main_brown font-medium bg-text hover:text-[#6e5e5183] max-lg:text-sm max-md:text-xs"
          >
            {t("Navbar.forDrivers")}
          </Link>
        </li>
        <li>
          <Link
            href="#join-us"
            className="text-main_brown font-medium bg-text hover:text-[#6e5e5183] max-lg:text-sm max-md:text-xs"
          >
            {t("Navbar.joinUs")}
          </Link>
        </li>
        <li>
          <Link
            href="#contacts"
            className="text-main_brown font-medium bg-text hover:text-[#6e5e5183] max-lg:text-sm max-md:text-xs"
          >
            {t("Navbar.contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
