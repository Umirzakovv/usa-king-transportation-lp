import { navbarLinks } from "@/app/data/navbar-links";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-10">
        {navbarLinks?.map((item) => {
          return (
            <li key={item?.id}>
              <Link
                href={item?.href}
                className="text-main_brown font-medium bg-text hover:text-[#6e5e5183]"
              >
                {item?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
