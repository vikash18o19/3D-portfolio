import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./stars.scss";

import GlassCube from "./Cube";

const Section = styled(motion.div)`
  height: 100vh;
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

const Particle = styled(motion.div)`
  position: absolute;
  background-color: black;
  border-radius: 50%;
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
        ? "black"
        : currentPercent >= 20
        ? "white"
        : "white"
    );
  }, [currentPercent]);

  // Function to generate random values within a range
  const randomRange = (min, max) => Math.random() * (max - min) + min;

  // Create a state to hold the particles' data
  const [particles, setParticles] = useState([]);

  // Generate random particles on component mount
  useEffect(() => {
    const numParticles = 100; // Adjust the number of particles as needed
    const newParticles = Array.from({ length: numParticles }).map(() => ({
      x: randomRange(0, 100), // X position in viewport percentage (0-100)
      y: randomRange(0, 100), // Y position in viewport percentage (0-100)
      size: randomRange(1, 8), // Size of the particle (1-5 pixels)
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div>
      <Section
        ref={HeroRef}
        style={
          {
            // backgroundColor: `${currentPercent < 100 ? "black" : "white"}`,
          }
        }
      >
        <Container
          style={{
            position: "absolute",
            bottom: "30vh",
            left: "0",
            paddingLeft: "30vw",
            opacity: pathLength + 0.1,
            color: currentProgressColor,
          }}
        >
          {/* {particles.map((particle, index) => (
            <Particle
              key={index}
              style={{
                bottom: `${particle.y}vh`,
                left: `${particle.x}vw`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          ))} */}
          <Left>
            <Title
              style={{
                /* Text styles */
                color: "white" /* Primary text color */,
                mixBlendMode:
                  "difference" /* Blend mode to interact with background */,
                backgroundColor:
                  "black" /* Black background for white text effect */,
                padding:
                  "10px" /* Optional: Add padding to the Title element */,
                borderRadius:
                  "5px" /* Optional: Add rounded corners to the Title element */,
              }}
            >
              Welcome
            </Title>
            <Desc
              style={{
                /* Text styles */
                // opacity: pathLength,
                color: "white" /* Primary text color */,
                mixBlendMode:
                  "difference" /* Blend mode to interact with background */,
                backgroundColor:
                  "black" /* Black background for white text effect */,
                padding:
                  "10px" /* Optional: Add padding to the Title element */,
                borderRadius:
                  "5px" /* Optional: Add rounded corners to the Title element */,
              }}
            >
              Scroll Down to know more about me
            </Desc>
            <div
              style={{
                // left: "50%", // Center horizontally
                zIndex: 100,
              }}
            >
              <GlassCube />
            </div>
          </Left>
          {/* <motion.div
            style={{
              position: `${currentPercent < 100 ? "fixed" : "absolute"}`,
              top: "0px",
              left: "0px",
              height: "100vh",
              backgroundColor: "white",
              width: `${currentPercent}vw`,
              zIndex: -1,
            }}
          ></motion.div> */}
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
