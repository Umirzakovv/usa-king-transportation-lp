import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Link href="#home" className="max-md:w-[80px]">
      <Image src="/logo.svg" alt="logo" layout="" width={138} height={77}/>
    </Link>
  );
};

export default Logo;
