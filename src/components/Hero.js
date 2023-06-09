import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Section = styled(motion.div)`
  height: 400vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

const Container = styled(motion.div)`
  padding-top: 5vh;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  width: 40vw;
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  flex-direction: column;
  justify-content: center;
  gap: 5vh;
`;

const Title = styled.h1`
  align-self: center;
  font-size: 15vw;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  @media only screen and (min-width: 1000px) {
    font-size: 8vw;
  }
`;

const WhatWeDo = styled(motion.div)`
  display: flex;
  /* align-items: center; */
  gap: 10px;
`;

const Subtitle = styled.h2``;

const Desc = styled(motion.p)`
  text-align: center;
  font-size: 5vw;
  @media only screen and (min-width: 1000px) {
    font-size: 3vw;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 150px;
  height: 30px;
`;

const Hero = () => {
  const [currentPercent, setCurrentPercent] = useState(null);
  const [currentProgressColor, setCurrentProgressColor] = useState(null);

  const HeroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: HeroRef,
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 800,
    damping: 30,
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(v));
      }),
    [yRange]
  );
  useEffect(() => {
    setCurrentProgressColor(
      currentPercent >= 90
        ? "black"
        : currentPercent >= 45
        ? "#31A9D5"
        : currentPercent >= 20
        ? "#FF3B77"
        : "white"
    );
  }, [currentPercent]);

  return (
    <Section
      ref={HeroRef}
      style={{ backgroundColor: `${currentPercent < 100 ? "black" : "white"}` }}
    >
      <Container
        style={{
          position: `${currentPercent < 100 ? "fixed" : "absolute"}`,
          bottom: "30vh",
          left: "0",
          paddingLeft: "30vw",
          opacity: pathLength + 0.1,
          color: currentProgressColor,
        }}
      >
        <Left>
          <Title>Welcome</Title>
          <Desc style={{ opacity: pathLength }}>
            Scroll Down to know more about me
          </Desc>
        </Left>
        <motion.div
          style={{
            position: `${currentPercent < 100 ? "fixed" : "absolute"}`,
            top: "0px",
            left: "0px",
            height: "100vh",
            backgroundColor: "white",
            width: `${currentPercent}vw`,
            zIndex: -1,
          }}
        ></motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
