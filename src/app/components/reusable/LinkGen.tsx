import Link from "next/link";
import { FC } from "react";

type LinkGenType = {
  title: string;
  href: string;
  className?: string;
};

const LinkGen: FC<LinkGenType> = ({ title, href="", className = "" }) => {
  return (
    <Link
      href={href}
      className={`${className} bg-main_orange text-lg px-6 py-2 font-semibold text-white rounded-full`}
    >
      {title}
    </Link>
  );
};

export default LinkGen;
