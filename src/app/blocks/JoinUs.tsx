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
        <div className=" h-[500px] grid grid-cols-3 grid-rows-4 gap-4 max-md:h-max max-md:grid max-md:grid-cols-1 max-md:grid-rows-8 max-sm:grid-rows-5">
          <div className="relative col-span-2 row-span-2 max-md:row-span-2 max-md:col-span-2 max-sm:row-span-1">
            <Image
              src="/join-us-truck1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative row-span-1 max-md:row-span-2 max-md:col-span-2 max-sm:row-span-1">
            <Image
              src="/join-us-truck1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative col-span-1 row-span-3 max-md:row-span-2 max-md:col-span-2 max-sm:row-span-1">
            <Image
              src="/join-us-truck1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>

          <div className="col-span-2 row-span-2 bg-white p-10 rounded-2xl max-md:row-span-2">
            <p className="text-xl text-justify max-md:text-base">{t("text")}</p>
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
