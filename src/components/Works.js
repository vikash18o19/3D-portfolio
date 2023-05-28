import React, { useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    scroll-behavior: smooth;
  }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
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
  width: 12rem;
  height: 12rem;
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
  height: 10rem;
  width: 10rem;
`;


const Heading = styled.h1`
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  backdrop-filter: blur(5px);
  color: rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }

`;

const Works = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const distortDivs = document.querySelectorAll('.distort');
      distortDivs.forEach((distortDiv) => {
        const rect = distortDiv.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const distX = mouseX - centerX;
        const distY = mouseY - centerY;

        distortDiv.style.transform = `rotateX(${-distY / 20}deg) rotateY(${distX / 20}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Section>
        <Upper>
          <Heading>PROJECTS AND WORKS</Heading>
        </Upper>
        <Card className='distort'>
          <Content>
            <Front onClick={() => window.location.href = 'https://github.com/vikash18o19/soil-app-frontend'}>
              <CardImg src='./images/soil app logo.png' alt="Logo" />
            </Front>
            <Back>Back Content</Back>
          </Content>
        </Card>
        <Card className='distort'>
          <Content>
            <Front>Front Content</Front>
            <Back>Back Content</Back>
          </Content>
        </Card>
        <Card className='distort'>
          <Content>
            <Front>Front Content</Front>
            <Back>Back Content</Back>
          </Content>
        </Card>
        <Card className='distort'>
          <Content>
            <Front>Front Content</Front>
            <Back>Back Content</Back>
          </Content>
        </Card>
        <Lower></Lower>
      </Section>
    </>
  );
};

export default Works;
