import { FC, ReactNode } from "react";

type TitleType = {
  children: ReactNode;
  className?: string;
};

const Title: FC<TitleType> = ({ children, className }) => {
  return <h2 className={`${className} font-semibold text-4xl text-main_black max max-lg:text-2xl max-md:text-base`}>{children}</h2>;
};

export default Title;
