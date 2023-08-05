import React, { Suspense, useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import Cube from "./Cube";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  inView,
} from "framer-motion";
import { hover } from "@testing-library/user-event/dist/hover";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Section = styled(motion.div)`
  height: 400vh;
  /* scroll-snap-align: center; */
  position: relative;
  animation: ${fadeIn} 1s ease-in;
`;

const Container = styled(motion.div)`
  /* background-color: green; */
  width: 100vw;
  display: flex;
`;

const Left = styled.div`
  /* flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
    width: 400;
  } */
  padding-top: 5vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  padding: 5vw;
  text-align: center;
  font-size: 8vh;
  color: grey;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 900px) {
    font-size: 50px;
  }
`;

const Right = styled.div`
  width: 50%;
  /* background-color: red; */
  color: grey;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding-left: 5vw;
    align-items: center;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 10vw;
  @media only screen and (min-width: 900px) {
    width: 5vw;
  }
`;
const ImgRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled(motion.div)`
  text-align: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const Techstack = styled.h2`
  color: darkgrey;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Desc = styled(motion.p)`
  font-size: 24px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Experience = styled(motion.div)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Card = styled.h3`
  padding: 1vw;
  text-align: center;
  align-self: center;
  color: grey;
  position: relative;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: transform 0.5s;
  @media only screen and (max-width: 900px) {
  }
`;

const Who = () => {
  const [Percent, setPercent] = useState(null);
  const [currentProgressColor, setCurrentProgressColor] = useState(null);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(
    () =>
      yRange.onChange((v) => {
        setPercent(Math.trunc(v));
      }),
    [yRange]
  );
  // console.log(Percent);

  useEffect(() => {
    setCurrentProgressColor(
      Percent >= 90
        ? "black"
        : Percent >= 45
        ? "#31A9D5"
        : Percent >= 20
        ? "#FF3B77"
        : "white"
    );
  }, [Percent]);
  const handleDownload = async () => {
    const resumeDownloadLink =
      "https://sharito-backend-9wnyh.ondigitalocean.app/download/resume";

    fetch(resumeDownloadLink, { method: "GET", responseType: "blob" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "your-resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        alert("Try again later..");
        console.error("Error downloading resume:", error);
      });
  };

  return (
    <Section
      ref={ref}
      style={{
        backgroundColor: `${Percent < 100 ? "black" : "white"}`,
        transition: "opacity 1s ease-in",
      }}
    >
      <Container
        style={{
          bottom: "10vh",
          position: `${Percent >= 0.1 && Percent < 100 ? "fixed" : "absolute"}`,
        }}
      >
        <Right>
          <ImgRow>
            <Img src="./images/Basketball.png" />
            <Img src="./images/Coffee.png" />
          </ImgRow>
          <Title
            style={{
              padding: "2vw",
            }}
          >
            Get to know me
          </Title>
          <WhatWeDo
            style={{
              opacity: pathLength,
            }}
          >
            <Subtitle>Hey There..</Subtitle>

            <Desc>
              Vikash this side.
              <br />
              I am a full stack developer who loves
              <br />
              coffee and dribble.
            </Desc>
            <Subtitle
              style={{
                marginTop: "20px",
              }}
            >
              I've worked at{" "}
            </Subtitle>

            <Experience>
              <Card>
                Research Intern <br /> University of Guelph ,Canada{" "}
              </Card>
              <Card>
                ML Intern <br /> IIT Indore{" "}
              </Card>
              <Card>
                Web Developer <br /> Inayat, Rajasthan{" "}
              </Card>
            </Experience>
          </WhatWeDo>
        </Right>
        <Left>
          <Title>What I usually work with ?</Title>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              opacity: pathLength,
            }}
          >
            <Techstack>HTML</Techstack>
            <Techstack>CSS</Techstack>
            <Techstack>JAVASCRIPT</Techstack>
            <Techstack>REACT</Techstack>
            <Techstack>FLUTTER</Techstack>
            <Techstack>NODE JS</Techstack>
            <Techstack>PYTHON</Techstack>
            <Techstack>MONGODB</Techstack>
            <Techstack>ML</Techstack>
            <Techstack
              onClick={handleDownload}
              style={{
                margin: "2rem",
                color: "black",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Download Resume
            </Techstack>
          </motion.div>
        </Left>
        <motion.div
          style={{
            position: `${Percent < 100 ? "fixed" : "absolute"}`,
            bottom: "0px",
            right: "0px",
            height: "100vh",
            backgroundColor: "white",
            width: `${Percent}vw`,
            zIndex: -1,
          }}
        ></motion.div>
      </Container>
    </Section>
  );
};

export default Who;
