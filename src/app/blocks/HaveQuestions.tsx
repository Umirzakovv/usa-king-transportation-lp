import React, { FC } from "react";
import Container from "../components/reusable/Container";
import Title from "../components/reusable/Title";
import CallSupport from "../components/Main/CallSupport";
import Image from "next/image";
import CallSupportInput from "../components/Main/CallSupportInput";
import { useTranslations } from "next-intl";

const HaveQuestions: FC = () => {
  const t = useTranslations("HaveQuestions");
  return (
    <div id="contacts">
      <Container className="py-20">
        <Title className="text-center pb-20">{t("title")}?</Title>
        <div className="flex items-center justify-between borderr max-lg:grid max-lg:place-items-center">
          <div className="w-1/2 borderr max-lg:w-full">
            <CallSupport />
            <p className="text-[#627A9E] m-5">{t("CallSupport.text")}</p>
            <CallSupportInput />
          </div>
         
          <div className="w-1/3 ml-5 borderr max-lg:w-full">
            <Image
              src="/iphone-15.png"
              alt="Iphone 15 img"
              width={427}
              height={864}
              layout="responsive"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HaveQuestions;
