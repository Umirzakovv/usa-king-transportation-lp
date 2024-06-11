import { FC } from "react";
import Container from "../components/reusable/Container";
import Title from "../components/reusable/Title";

const AboutUsSecondPart: FC = () => {
  return (
    <div className="bg-main_grey ">
      <Container className="py-[100px]">
        <Title className="text-center">
          Usa King Transportation <br />
          is one of the best logistic company
        </Title>
        <p className="text-lg text-main_blue text-center mt-3 mb-10">
          With years of experience and a dedicated team of professionals, we
          specialize in freight forwarding.
        </p>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
          <div className="rounded-2xl col-start-1 col-span-2 row-start-1 row-span-2"></div>
          <div className="rounded-2xl col-start-3 col-span-1"></div>
          <div className="rounded-2xl col-start-4 col-span-1"></div>
          <div className="rounded-2xl col-start-3 col-span-2"></div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsSecondPart;
