import { FC, FormEvent, FormEventHandler, ReactNode } from "react";

type ButtonType = {
  title: string | ReactNode;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
};

const Button: FC<ButtonType> = ({ title, className = "", type }) => {
  return (
    <button
      type={type}
      className={`${className} bg-main_orange text-lg px-6 py-2 font-semibold text-white rounded-full`}
    >
      {title}
    </button>
  );
};

export default Button;
