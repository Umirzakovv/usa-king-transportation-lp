"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FC, FormEvent, useState } from "react";
import { Toaster, toast } from "sonner";

const CallSupportInput: FC = () => {
  const t = useTranslations("Toast");

  const toaster = () => toast.success(t("formSubmit"));
  const [number, setNumber] = useState<string>("");
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sheetdb.io/api/v1/6i9xxvj37486y", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            id: number,
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      toaster();
    }
  };
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="border-orange rounded-[50px] p-1 flex justify-between items-center shadow-xl w-full"
      >
        <input
          type="number"
          required
          value={number}
          onChange={(e) => setNumber(e?.target?.value)}
          placeholder="Enter your number"
          className="w-full focus:outline-none ml-5"
        />
        <button
          type="submit"
          className="bg-main_orange py-6 px-8 rounded-[50px]"
        >
          <Image
            src="/arrow-right.svg"
            alt="arrow icon"
            width={62}
            height={25}
          />
        </button>
      </form>
      <p className="text-rose-500 invisible">errro</p>
      <Toaster richColors />
    </>
  );
};

export default CallSupportInput;
