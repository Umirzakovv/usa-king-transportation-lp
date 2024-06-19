import { FC } from "react";
import Container from "../components/reusable/Container";
import Title from "../components/reusable/Title";
import { useTranslations } from "next-intl";

const AboutUsSecondPart: FC = () => {
  const t = useTranslations("AboutUs2")
  return (
    <div className="bg-main_grey ">
      <Container className="py-[100px]">
        <Title className="text-center">
          {t("title")} <br />
          {t("title2")}
        </Title>
        <p className="text-lg text-main_blue text-center mt-3 mb-10">
          {t("text")}
        </p>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
          <div className="borderr rounded-2xl col-start-1 col-span-2 row-start-1 row-span-2"></div>
          <div className="borderr rounded-2xl col-start-3 col-span-1"></div>
          <div className="borderr rounded-2xl col-start-4 col-span-1"></div>
          <div className="borderr rounded-2xl col-start-3 col-span-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSecondPart;
