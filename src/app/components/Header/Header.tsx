import { FC } from "react";
import Logo from "../reusable/Logo";
import Navbar from "./Navbar";
import Utilitybar from "./Utilitybar";
import Container from "../reusable/Container";

const Header: FC = () => {
  return (
    <div>
      <Container>
        <header className="flex justify-between items-center">
          <Logo />
          <Navbar />
          <Utilitybar />
        </header>
      </Container>
    </div>
  );
};

export default Header;
