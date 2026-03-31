import styled from "styled-components";
import Contact from "./Contact";
import Hero from "./Hero";
import Works from "./Works";
import React, { useState, useEffect } from "react";
import MobileWho from "./MobileView/WhoMobile";
import SplashScreen from "./SplashScreen";
import GlassNavbar from "./Navbar";

const Container = styled.div`
  scroll-behavior: smooth;
  overflow-y: auto;
  background-color: #050510;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #7c3aed, #0ea5e9);
    border-radius: 2px;
  }
`;

function MainPage() {
  const bodyStyle = document.body.style;
  const [overflow, setOverflow] = useState(true);
  useEffect(() => {
    bodyStyle.overflowY = overflow ? "auto" : "hidden";
  }, [overflow]);

  return (
    <Container>
      <SplashScreen />
      <GlassNavbar />
      <div id="hero-section">
        <Hero />
      </div>
      <div id="about-section">
        <MobileWho setOverflow={setOverflow} />
      </div>
      <div id="works-section">
        <Works setOverflow={setOverflow} />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
    </Container>
  );
}

export default MainPage;
