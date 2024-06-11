import Image from "next/image";
import React, { FC } from "react";

const CallSupportInput: FC = () => {
  return (
    <>
      <div className="border-orange rounded-[50px] p-1 flex justify-between items-center shadow-xl">
        <input
          type="number"
          placeholder="Enter your number"
          className="w-full focus:outline-none ml-5"
        />
        <button className="bg-main_orange py-6 px-8 rounded-[50px]">
          <Image
            src="/arrow-right.svg"
            alt="arrow icon"
            width={62}
            height={25}
          />
        </button>
      </div>
      <p className="text-rose-500 invisible">errro</p>
    </>
  );
};

export default CallSupportInput;
