import { FC } from "react";
import Container from "../components/reusable/Container";
import Title from "../components/reusable/Title";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUsSecondPart: FC = () => {
  const t = useTranslations("AboutUs2");
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

        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] max-lg:grid-cols-2">
          <div className="relative col-start-1 col-span-2 row-start-1 row-span-2">
            <Image
              src="/about-us1.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative col-start-3 col-span-1">
            <Image
              src="/about-us2.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative col-start-4 col-span-1">
            <Image
              src="/about-us3.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
          <div className="relative col-start-3 col-span-2">
            <Image
              src="/about-us4.png"
              alt="truck image"
              fill={true}
              objectFit="cover"
              className="block rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSecondPart;
