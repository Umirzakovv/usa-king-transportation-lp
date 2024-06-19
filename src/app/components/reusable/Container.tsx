import { FC, ReactNode } from "react";

type ContainerType = {
  className?: string;
  children: ReactNode;
};

const Container: FC<ContainerType> = ({ className = "", children }) => {
  return (
    <div
      className={`${className} borderr w-[1440px] block my-0 mx-auto max-2xl:w-[1000px] max-lg:w-[750px] max-md:w-[620px] max-sm:w-[340px]`}
    >
      {children}
    </div>
  );
};

export default Container;
