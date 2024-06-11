import { FC, ReactNode } from "react";

type ContainerType = {
  className?: string;
  children: ReactNode;
};

const Container: FC<ContainerType> = ({ className="", children }) => {
  return (
    <div className={`${className} w-[1440px] block my-0 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
