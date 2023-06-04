import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* scroll-snap-align: center; */
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  /* padding-right: 5svw; */
  width: 40svw;
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 5svh;
  @media only screen and (max-width: 768px) {
    /* padding-left: initial; */
  }
`;
const Title = styled.h1`
  font-size: 5rem;
  color: white;
`;

// const Line = styled.img`
//     width:20px;
// `
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;
const Subtitle = styled.h2`
  font-size: 35px;
  color: white;
`;
const Desc = styled.p`
  color: white;
  font-size: 25px;
`;
const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 150px;
  height: 30px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Img = styled.img`
  height: 50svh;
  width: 20svw;
  object-fit: contain;
  animation: animate 3s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

const Hero = (props) => {
  return (
    <Section>
      {/* <Navbar /> */}
      <Container>
        <Left>
          <Title>Welcome...</Title>
          <WhatWeDo>
            {/* <Line src="./images/white_line.png" /> */}
            <Subtitle> -- What I do..</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating apps having great visuals and involving AI.
          </Desc>
          <Button>Learn More</Button>
        </Left>
      </Container>
    </Section>
  );
};

export default Hero;
