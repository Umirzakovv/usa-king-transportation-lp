import React from "react";
import Logo from "../reusable/Logo";
import Link from "next/link";
import Container from "../reusable/Container";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const t2 = useTranslations("Header");

  return (
    <footer className="bg-main_blue py-20 text-[#d9d9d9]">
      <Container className="flex justify-between max-md:grid max-md:grid-cols-2 max-md:gap-10">
        <div>
          <Logo />
        </div>
        <div className="grid gap-1 max-md:gap-1">
          <p className="font-bold">{t("Pages.title")}</p>

          <ul>
            <li>
              <Link
                href="#home"
                className="font-medium bg-text hover:text-[#bbb] max-lg:text-sm max-md:text-xs"
              >
                {t2("Navbar.home")}
              </Link>
            </li>
            <li>
              <Link
                href="#about-us"
                className="font-medium bg-text hover:text-[#bbb] max-lg:text-sm max-md:text-xs"
              >
                {t2("Navbar.aboutUs")}
              </Link>
            </li>
            <li>
              <Link
                href="#for-drivers"
                className="font-medium bg-text hover:text-[#bbb] max-lg:text-sm max-md:text-xs"
              >
                {t2("Navbar.forDrivers")}
              </Link>
            </li>
            <li>
              <Link
                href="#join-us"
                className="font-medium bg-text hover:text-[#bbb] max-lg:text-sm max-md:text-xs"
              >
                {t2("Navbar.joinUs")}
              </Link>
            </li>
            <li>
              <Link
                href="#contacts"
                className="font-medium bg-text hover:text-[#bbb] max-lg:text-sm max-md:text-xs"
              >
                {t2("Navbar.contacts")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">{t("Address.title")}</p>
          <address>
            50 Milton St <br />
            Fstrvl Trvose, PA 19053
          </address>
        </div>
        <div>
          <p className="font-bold">{t("DotNumber.title")}</p>
          <p>3800206</p>
        </div>
      </Container>
      <p className="text-center mt-5">{t("text")}</p>
    </footer>
  );
};

export default Footer;
