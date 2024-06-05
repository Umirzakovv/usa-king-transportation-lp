import Link from "next/link";
import { FC } from "react";

type ButtonType = {
  title: string;
  className?: string;
};

const Button: FC<ButtonType> = ({ title, className }) => {
  return (
    <Link
      href="#contacts"
      className={`${className} bg-main_orange text-lg px-6 py-2 font-semibold text-white rounded-full`}
    >
      {title}
    </Link>
  );
};

export default Button;
