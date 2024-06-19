import React, { FC } from "react";
import Container from "../components/reusable/Container";
import LinkGen from "../components/reusable/LinkGen";
import { useTranslations } from "next-intl";
import Image from "next/image";

const JoinUs: FC = () => {
  const t = useTranslations("JoinUs");
  return (
    <div className="py-20 bg-main_grey">
      <Container>
        <div className=" h-[500px] grid grid-cols-3 grid-rows-4 gap-4">
          <div className="relative col-span-2 row-span-2">
            <Image
              src="/join-us-truck1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative row-span-1">
            <Image
              src="/join-us-truck1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative col-span-1 row-span-3">
            <Image
              src="/join-us-truck1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>

          <div className="col-span-2 row-span-2 bg-white p-10 rounded-2xl">
            <p className="text-xl text-justify">{t("text")}</p>
            <LinkGen
              title={t("button")}
              href="#join-us"
              className="bg-[#627A9E] py-2 px-10 shadow block my-0 mx-auto text-center w-max mt-10"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
