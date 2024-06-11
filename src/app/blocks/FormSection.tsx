import { FC } from "react";
import Form from "../components/Main/Form";
import Container from "../components/reusable/Container";
import Image from "next/image";
import Title from "../components/reusable/Title";

const FormSection: FC = () => {
  return (
    <section id="join-us" className="py-20 h-max">
      <Container>
        <Title className="text-center mb-20">
          Don’t miss out on your ideal opportunity
        </Title>
        <div className="flex">
          <Image
            src="/form-truck.png"
            alt="truck image"
            width={700}
            height={100}
          />
          <Form />
        </div>
      </Container>
    </section>
  );
};

export default FormSection;