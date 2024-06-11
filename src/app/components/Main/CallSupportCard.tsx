import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CallSupportCardProps {
  title: string;
  email: string;
  number: string;
  username: string;
  link: string;
}

const CallSupportCard: FC<CallSupportCardProps> = ({
  title,
  email,
  number,
  username,
  link,
}) => {
  return (
    <div className="border-orange w-full grid gap-1 p-5 rounded-2xl">
      <h4 className="text-[#303030] text-xl font-medium">{title}</h4>

      {email ? (
        <div className="flex justify-between items-center">
          <p className="text-[#627A9E]">{email}</p>
          <Image src="/copy.svg" alt="copy image" width={19} height={22} />
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between items-center">
        <Link className="text-[#5395F9]" href={number}>
          {number}
        </Link>
        <Link target="_blank" href={link} className="text-[#5395F9]">
          {username}
        </Link>
        <Link target="_blank" href={link}>
          <Image
            src="/telegram.svg"
            alt="telegram image"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default CallSupportCard;
