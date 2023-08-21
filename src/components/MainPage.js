import styled from "styled-components";
import Contact from "./Contact";
import Hero from "./Hero";
import Works from "./Works";
import React, { useState, useEffect } from "react";
import MobileWho from "./MobileView/WhoMobile";
import SplashScreen from "./SplashScreen";

const Container = styled.div`
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto; // adds a scroll bar when exceeding the vertical screen.
  /* background: url("./images/bg2.jpg"); */
  background-size: cover;
  background-position: center;
  background-color: black;
  &::-webkit-scrollbar {
    display: none;
  }
  background-repeat: no-repeat;

  @media only screen and (max-width: 10px) {
    background-size: contain;
  }
`;

function MainPage() {
  const bodyStyle = document.body.style;
  const [overflow, setOverflow] = useState(true);
  useEffect(() => {
    console.log("overflow", overflow);
    bodyStyle.overflowY = overflow ? "auto" : "hidden";
  }, [overflow]);
  return (
    <Container>
      <SplashScreen />
      <Hero />
      <MobileWho setOverflow={setOverflow} />
      <Works setOverflow={setOverflow} />
      <Contact />
      {/* <GlassCube /> */}
    </Container>
  );
}

export default MainPage;
