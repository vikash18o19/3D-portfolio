import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardContainer = styled(motion.div)`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  width: 15vw;
  height: 15vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: transform 0.5s;

  @media only screen and (max-width: 900px) {
    width: 25vw;
    height: 25vw;
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
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
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
const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
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

const CardBack = styled.div`
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

const Works = () => {
  const [isHovered, setIsHovered] = useState(null);
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
  const handleCardHover = (cardId) => {
    setIsHovered(cardId);
  };

  const handleCardLeave = () => {
    setIsHovered(null);
  };

  const cards = [
    {
      id: 1,
      frontImgSrc: "./images/SoilApp.png",
      backImgSrc: "./images/app.png",
      link: "https://github.com/vikash18o19/soil-app-frontend",
    },
    {
      id: 2,
      frontImgSrc: "./images/NeuralNet.png",
      backImgSrc: "./images/Traffic.png",
      link: "https://github.com/vikash18o19/Traffic_sign_recognition",
    },
    {
      id: 3,
      frontImgSrc: "./images/painter.png",
      backImgSrc: "./images/finger.png",
      link: "https://github.com/vikash18o19/Finger_Painter",
    },
    {
      id: 4,
      frontImgSrc: "./images/GAN.png",
      backImgSrc: "./images/GanModel.png",
      link: "https://github.com/vikash18o19/Soil-GAN",
    },
  ];

  return (
    <Section>
      <MainContainer>
        <Upper>
          <Heading>PROJECTS AND WORKS</Heading>
        </Upper>
        <Lower ref={ref} animate={animation}>
          {cards.map((card) => (
            <CardContainer
              key={card.id}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => (window.location.href = card.link)}
              whileHover={{ scale: isHovered === card.id ? 1.2 : 1 }}
            >
              <CardContent>
                <CardFront>
                  <CardImg
                    src={
                      isHovered === card.id ? card.backImgSrc : card.frontImgSrc
                    }
                    alt="Logo"
                  />
                </CardFront>
              </CardContent>
            </CardContainer>
          ))}
        </Lower>
      </MainContainer>
    </Section>
  );
};

export default Works;
