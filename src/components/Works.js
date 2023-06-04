import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    scroll-behavior: smooth;
  }
`;

const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  margin-left: 10vw;
  margin-right: 10vw;
`;

const Upper = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
`;

const Lower = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
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
  height: 12svw;
  width: 12svw;
`;

const Heading = styled.h1`
  padding: 1rem;
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  backdrop-filter: blur(100px);
  color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  /* background: linear-gradient(to bottom, rgba(100, 240, 255, 0.6), rgba(255, 255, 255, 0.2)); */
  background-color: rgba(255, 255, 255, 0.1);
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;
const CardHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Works = () => {
  const [isHovered, setIsHovered] = useState(0);

  const handleHover = (num) => {
    setIsHovered(num);
  };

  const handleLeave = () => {
    setIsHovered(0);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const distortDivs = document.querySelectorAll(".distort");
      distortDivs.forEach((distortDiv) => {
        const rect = distortDiv.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = mouseX - centerX;
        const distY = mouseY - centerY;

        distortDiv.style.transform = `rotateX(${-distY / 20}deg) rotateY(${
          distX / 20
        }deg)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Section>
        <Upper>
          <Heading>PROJECTS AND WORKS</Heading>
        </Upper>
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
        <Lower></Lower>
      </Section>
    </>
  );
};

export default Works;
