"use client";

import { FC, useEffect, useState } from "react";
import Logo from "../reusable/Logo";
import Navbar from "./Navbar";
import Utilitybar from "./Utilitybar";
import Container from "../reusable/Container";

export type WindowDimensionsType = {
  width: number | undefined;
  height: number | undefined;
  isSmallScreen: boolean;
};

const Header = () => {
  const [windowDimensions, setWindowDimensions] =
    useState<WindowDimensionsType>({
      width: undefined,
      height: undefined,
      isSmallScreen: false,
    });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setWindowDimensions({
        width: screenWidth,
        height: window.innerHeight,
        isSmallScreen: screenWidth < 640,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="backdrop-blur py-2">
      <div>
        <Container>
          <header className="flex justify-between items-center">
            <Logo />
            {!windowDimensions?.isSmallScreen ? <Navbar /> : ""}
            <Utilitybar windowDimensions={windowDimensions} />
          </header>
        </Container>
      </div>
    </div>
  );
};

export default Header;
