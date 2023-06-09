import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    scroll-behavior: smooth;
  }
`;

const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
`;
const Upper = styled.div`
  align-self: center;
`;

const Lower = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-self: center;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const Card = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  width: 15svw;
  height: 15svw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform 0.5s;
  @media only screen and (max-width: 900px) {
    width: 25vw;
    height: 25vw;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: translateZ(100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateY(180deg) translateZ(100px);
`;

const CardImg = styled.img`
  height: 80%;
  width: 80%;
`;

const Heading = styled.h1`
  text-align: center;
  padding: 1rem;
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 5vw;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* backdrop-filter: blur(100px); */
  color: white;
  border-radius: 15px;
  /* background: linear-gradient(to bottom, rgba(100, 240, 255, 0.6), rgba(255, 255, 255, 0.2)); */
  /* background-color: rgba(255, 255, 255, 0.6); */
  @media only screen and (max-width: 900px) {
    font-size: 8vw;
  }
`;
const CardHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Works = () => {
  const [isHovered, setIsHovered] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
        },
      });
    } else {
      animation.start({
        x: -100,
        opacity: 0,
      });
    }
  }, [inView]);

  const handleHover = (num) => {
    setIsHovered(num);
  };

  const handleLeave = () => {
    setIsHovered(0);
  };

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     const distortDivs = document.querySelectorAll(".distort");
  //     distortDivs.forEach((distortDiv) => {
  //       const rect = distortDiv.getBoundingClientRect();
  //       const mouseX = event.clientX - rect.left;
  //       const mouseY = event.clientY - rect.top;
  //       const centerX = rect.width / 2;
  //       const centerY = rect.height / 2;
  //       const distX = mouseX - centerX;
  //       const distY = mouseY - centerY;

  //       distortDiv.style.transform = `rotateX(${-distY / 20}deg) rotateY(${
  //         distX / 20
  //       }deg)`;
  //     });
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Section>
        <MainContainer>
          <Upper>
            <Heading>PROJECTS AND WORKS</Heading>
          </Upper>
          <Lower ref={ref} animate={animation}>
            <Row1>
              <Card className="distort">
                <Content>
                  <Front
                    onMouseEnter={() => handleHover(1)} //always have to pass a ref not call directly.
                    onMouseLeave={handleLeave}
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/vikash18o19/soil-app-frontend")
                    }
                  >
                    {isHovered === 1 ? (
                      <CardImg src="./images/app.png" alt="Logo" />
                    ) : (
                      <CardImg src="./images/soil app logo.png" alt="Logo" />
                    )}
                  </Front>
                </Content>
              </Card>
              <Card className="distort">
                <Content>
                  <Front
                    onMouseEnter={() => handleHover(2)} //always have to pass a ref not call directly.
                    onMouseLeave={handleLeave}
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/vikash18o19/Traffic_sign_recognition")
                    }
                  >
                    {isHovered === 2 ? (
                      <CardImg src="./images/Traffic.png" alt="Logo" />
                    ) : (
                      <CardImg src="./images/NeuralNet.png" alt="Logo" />
                    )}
                  </Front>
                </Content>
              </Card>
            </Row1>
            <Row2>
              <Card className="distort">
                <Content>
                  <Front
                    onMouseEnter={() => handleHover(3)} //always have to pass a ref not call directly.
                    onMouseLeave={handleLeave}
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/vikash18o19/Finger_Painter")
                    }
                  >
                    {isHovered === 3 ? (
                      <CardImg src="./images/finger.png" alt="Logo" />
                    ) : (
                      <CardImg src="./images/painter.png" alt="Logo" />
                    )}
                  </Front>
                </Content>
              </Card>
              <Card className="distort">
                <Content>
                  <Front
                    onMouseEnter={() => handleHover(4)} //always have to pass a ref not call directly.
                    onMouseLeave={handleLeave}
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/vikash18o19/Soil-GAN")
                    }
                  >
                    {isHovered === 4 ? (
                      <CardImg src="./images/GanModel.png" alt="Logo" />
                    ) : (
                      <CardImg src="./images/GAN.png" alt="Logo" />
                    )}
                  </Front>
                </Content>
              </Card>
            </Row2>
          </Lower>
        </MainContainer>
      </Section>
    </>
  );
};

export default Works;
