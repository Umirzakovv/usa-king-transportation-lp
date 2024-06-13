import { FC } from "react";
import Container from "../components/reusable/Container";
import Title from "../components/reusable/Title";
import { useTranslations } from "next-intl";

const AboutUs: FC = () => {
  const t = useTranslations("Index");
  return (
    <div id="about-us" className="bg-[url(/about-us-bg.svg)] py-[200px]">
      <Container className="flex justify-between">
        <div className="w-2/3 grid gap-10">
          <Title>About us</Title>
          <h5>{t("title")}</h5>
          <p className="text-lg text-main_blue">
            At Usa King Transportation, we understand that reliable and
            efficient transportation is the backbone of every successful
            business. Our comprehensive range of transportation services ensures
            that your load reaches its destination safely, on time.
          </p>
          <p className="text-lg text-main_blue">
            With a commitment to excellence and a dedication to customer
            satisfaction, Usa King Transportation is here to streamline your
            logistics operations and drive your business forward. Explore our
            services today and experience the difference with us.
          </p>
        </div>

        <div className="flex justify-end w-1/3">
          <div className="mx-0 my-auto">
            <div
              className="w-max
          mb-10"
            >
              <h4 className="font-semibold text-4xl text-main_orange">100%</h4>
              <p className="text-base text-main_blue pt-3">
                Customer Satisfication
              </p>
            </div>
            <div className="w-max">
              <h4 className="font-semibold text-4xl text-main_orange">24/7</h4>
              <p className="text-base text-main_blue pt-3">
                Round-the-Clock Support
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
