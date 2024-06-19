import React, { FC } from "react";
import Container from "../components/reusable/Container";
import LinkGen from "../components/reusable/LinkGen";
import { useTranslations } from "next-intl";

const JoinUs: FC = () => {
  const t = useTranslations("JoinUs")
  return (
    <div className="py-20 bg-main_grey">
      <Container>
        <div className=" h-[500px] grid grid-cols-3 grid-rows-4 gap-4">
          <div className="borderr col-span-2 row-span-2">01</div>
          <div className="borderr row-span-1">02</div>
          <div className="borderr col-span-1 row-span-3">03</div>

          <div className="col-span-2 row-span-2 bg-white p-10 rounded-2xl">
            <p className="text-xl text-justify">
              {t("text")}
            </p>
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
