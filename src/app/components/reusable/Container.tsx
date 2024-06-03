import { FC } from "react";

type ContainerType = {
  className: string;
};

const Container: FC<ContainerType> = ({ className }) => {
  return <div className={`${className} `}>Container</div>;
};

export default Container;
