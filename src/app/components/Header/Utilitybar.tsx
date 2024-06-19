"use client";

import { useTranslations } from "next-intl";
import LinkGen from "../reusable/LinkGen";
import LanguageSwitcher from "../reusable/SwitchLang";
import Button from "../reusable/Button";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { FC, useState } from "react";
import { WindowDimensionsType } from "./Header";

type UtitlityBarType = {
  windowDimensions: WindowDimensionsType;
};

const Utilitybar: FC<UtitlityBarType> = ({ windowDimensions }) => {
  console.log(windowDimensions);

  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <LanguageSwitcher />
      <LinkGen title={t("button")} href="#join-us" />
      {windowDimensions?.isSmallScreen ? (
        <div onClick={() => setIsOpen(!isOpen)} className="ml-1">
          <Image src="burger.svg" alt="Burger icon" width={20} height={12} />
        </div>
      ) : (
        ""
      )}

      {isOpen ? <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> : ""}
    </div>
  );
};

export default Utilitybar;
