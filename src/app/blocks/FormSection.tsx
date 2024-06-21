import { FC } from "react";
import Form from "../components/Main/Form";
import Container from "../components/reusable/Container";
import Image from "next/image";
import Title from "../components/reusable/Title";
import { useTranslations } from "next-intl";

const FormSection: FC = () => {
  const t = useTranslations("FormSection");
  return (
    <section id="join-us" className="py-20 h-max">
      <Container>
        <Title className="text-center mb-20 max-lg:text-2xl max-md:text-base">
          {t("title")}
        </Title>
        <div className="flex items-center max-lg:grid max-lg:place-items-center ">
          <div className="mr-5 max-lg:mb-10">
            <Image
              src="/form-truck.png"
              alt="truck image"
              width={700}
              height={400}
              layout="responsive"
            />
          </div>
          <Form />
        </div>
      </Container>
    </section>
  );
};

export default FormSection;
