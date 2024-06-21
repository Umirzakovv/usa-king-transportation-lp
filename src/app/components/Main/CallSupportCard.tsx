"use client";

import { useState } from "react";
import { copyToClipboard } from "@/app/helpers/copyToClipboard";
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
  const [copyActive, setCopyActive] = useState<boolean>(false);

  const handleCopyClick = (text: string) => {
    copyToClipboard(text);
    setCopyActive(true);
    setTimeout(() => {
      setCopyActive(false);
    }, 2000);
  };

  return (
    <div className="border-orange grid gap-1 p-5 rounded-2xl  w-full">
      <h4 className="text-[#303030] text-xl font-medium">{title}</h4>

      {email && (
        <div className="flex justify-between items-center">
          <p className="text-[#627A9E]">{email}</p>
          <div onClick={() => handleCopyClick(email)}>
            <Image
              src="/copy.svg"
              alt="copy image"
              width={19}
              height={22}
              title="Копировать"
              className="cursor-pointer"
              style={{ opacity: copyActive ? 0.5 : 1 }}
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Link className="text-[#5395F9]" href={`tel:${number}`}>
          {number}
        </Link>
        <Link target="_blank" href={link} className="text-[#5395F9]">
          {username}
        </Link>
        <div>
          <Image
            src="/telegram.svg"
            alt="telegram image"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default CallSupportCard;
