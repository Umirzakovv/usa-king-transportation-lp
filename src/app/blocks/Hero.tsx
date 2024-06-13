import { FC } from "react";
import Header from "../components/Header/Header";
import Container from "../components/reusable/Container";

const Hero: FC = () => {
  return (
    <div id="home" className="bg-[url(/hero-bg.png)] bg-cover bg-center bg-no-repeat">
      <Header />
      <Container className="py-[200px]">
        <h1 className="text-7xl font-semibold text-white max-lg:text-4xl">
          Welcome to Usa King <br /> Transportation
        </h1>
        <p className="text-xl text-white mt-5 max-lg:text-base">
          Your trusted partner in transportation solutions.
        </p>
      </Container>
    </div>
  );
};

export default Hero;
