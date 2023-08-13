import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileWho from "./components/MobileView/WhoMobile";

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
  /* overflow: ${({ overflow }) => (overflow ? "visible" : "hidden")}; */
`;

function App() {
  const [displayMobileWho, setDisplayMobileWho] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setDisplayMobileWho(true);
      } else {
        setDisplayMobileWho(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const bodyStyle = document.body.style;
  const [overflow, setOverflow] = useState(true);
  useEffect(() => {
    bodyStyle.overflowY = overflow ? "auto" : "hidden";
  }, [overflow]);
  return (
    <Container>
      <Hero />
      {displayMobileWho ? <MobileWho /> : <Who />}
      <Works setOverflow={setOverflow} />
      <Contact />
    </Container>
  );
}

export default App;
