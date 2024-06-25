import React from "react";
import Logo from "../reusable/Logo";
import Link from "next/link";
import { navbarLinks } from "@/app/data/navbar-links";
import Container from "../reusable/Container";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-main_blue py-20 text-[#d9d9d9]">
      <Container className="flex justify-between max-md:grid max-md:grid-cols-2 max-md:gap-10">
        <div>
          <Logo />
        </div>
        <div className="grid gap-1 max-md:gap-1">
          <p className="font-bold">{t("Pages.title")}</p>
          {navbarLinks?.map((item) => {
            return (
              <Link key={item?.id} href={item?.href}>
                {item?.title}
              </Link>
            );
          })}
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
