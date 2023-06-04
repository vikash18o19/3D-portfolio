import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffect, useState, useRef } from "react";
import GlassForm from "./glassForm";

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Section = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* scroll-snap-align: center; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const Main = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  height: 40vw;
  width: 10vw;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
const MainRight = styled.div`
  position: relative;
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 20px;
  padding-top: 5em;
  padding-bottom: 5em;
  width: 50vw;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const Card = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  width: 7vw;
  height: 7vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CardImg = styled.img`
  height: 6vw;
  width: 6vw;
`;

const Contact = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <Section
      ref={sectionRef}
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease-in" }}
    >
      <Main>
        <Card
          onClick={() =>
            (window.location.href = "https://github.com/vikash18o19")
          }
        >
          <CardImg src="./images/github.png" />
        </Card>
        <Card>
          <CardImg src="./images/instagram.png" />
        </Card>
        <Card>
          <CardImg src="./images/linkedin.png" />
        </Card>
      </Main>
      <MainRight>
        <GlassForm />
      </MainRight>
    </Section>
  );
};

export default Contact;
