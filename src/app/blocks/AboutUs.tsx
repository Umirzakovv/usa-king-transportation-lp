import { FC } from "react";
import Container from "../components/reusable/Container";
import Title from "../components/reusable/Title";
import { useTranslations } from "next-intl";

const AboutUs: FC = () => {
  const t = useTranslations("AboutUs");
  return (
    <div id="about-us" className="bg-[url(/about-us-bg.svg)] py-[200px]">
      <Container className="flex justify-between">
        <div className="w-2/3 grid gap-10">
          <Title>{t("title")}</Title>
          <p className="text-lg text-main_blue">{t("text1")}</p>
          <p className="text-lg text-main_blue">{t("text2")}</p>
        </div>

        <div className="flex justify-end w-1/3">
          <div className="mx-0 my-auto">
            <div
              className="w-max
          mb-10"
            >
              <h4 className="font-semibold text-4xl text-main_orange">100%</h4>
              <p className="text-base text-main_blue pt-3">
              {t("shortText1")}

              </p>
            </div>
            <div className="w-max">
              <h4 className="font-semibold text-4xl text-main_orange">24/7</h4>
              <p className="text-base text-main_blue pt-3">
              {t("shortText2")}

              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
