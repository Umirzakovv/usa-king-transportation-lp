import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

type SidebarType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: FC<SidebarType> = ({ isOpen, setIsOpen }) => {
  const t2 = useTranslations("Header");
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsOpen]);

  return (
    <div
      ref={modalRef}
      className={`h-screen w-3/4 bg-white absolute top-0 right-0 p-5 rounded-l-md border shadow-2xl bg-opacity-95`}
    >
      <div onClick={() => setIsOpen(!isOpen)} className="w-max">
        <Image src="/x-mark.svg" alt="xmark icon" width={24} height={24} />
        <ul className="grid gap-5 mt-10">
          <li>
            <Link
              href="#home"
              className="font-medium bg-text hover:text-[#bbb]"
            >
              {t2("Navbar.home")}
            </Link>
          </li>
          <li>
            <Link
              href="#about-us"
              className="font-medium bg-text hover:text-[#bbb]"
            >
              {t2("Navbar.aboutUs")}
            </Link>
          </li>
          <li>
            <Link
              href="#for-drivers"
              className="font-medium bg-text hover:text-[#bbb]"
            >
              {t2("Navbar.forDrivers")}
            </Link>
          </li>
          <li>
            <Link
              href="#join-us"
              className="font-medium bg-text hover:text-[#bbb]"
            >
              {t2("Navbar.joinUs")}
            </Link>
          </li>
          <li>
            <Link
              href="#contacts"
              className="font-medium bg-text hover:text-[#bbb]"
            >
              {t2("Navbar.contacts")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
