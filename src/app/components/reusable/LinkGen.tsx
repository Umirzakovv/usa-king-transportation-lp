import Link from "next/link";
import { FC } from "react";

type LinkGenType = {
  title: string;
  className?: string;
};

const LinkGen: FC<LinkGenType> = ({ title, className = "" }) => {
  return (
    <Link
      href="#contacts"
      className={`${className} bg-main_orange text-lg px-6 py-2 font-semibold text-white rounded-full`}
    >
      {title}
    </Link>
  );
};

export default LinkGen;
