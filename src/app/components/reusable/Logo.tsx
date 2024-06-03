import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width={138} height={77} />
    </Link>
  );
};

export default Logo;
