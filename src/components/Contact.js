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

const Title = styled.h1`
  @media only screen and (max-width: 900px) {
    font-size: 8vw;
  }
  font-size: 5vw;
  color: white;
  align-self: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 5vh;
`;
const Main = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  align-self: center;
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
  @media only screen and (max-width: 900px) {
    height: 14vw;
    width: 14vw;
  }
`;

const CardImg = styled.img`
  height: 6vw;
  width: 6vw;
  @media only screen and (max-width: 900px) {
    height: 12vw;
    width: 12vw;
  }
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
      <Container>
        <Title>Want to Contact?</Title>
        <Main>
          <Card
            onClick={() =>
              (window.location.href = "https://github.com/vikash18o19")
            }
          >
            <CardImg src="./images/github.png" />
          </Card>
          <Card
            onClick={() =>
              (window.location.href = "https://www.instagram.com/_vikash_18_/")
            }
          >
            <CardImg src="./images/instagram.png" />
          </Card>
          <Card
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/vikash-kumar-156675227")
            }
          >
            <CardImg src="./images/linkedin.png" />
          </Card>
          <Card
            onClick={() =>
              (window.location.href =
                "mailto:vikash.18.dev@gmail.com?subject=Subject%20Here&body=Message%20Here")
            }
          >
            <CardImg src="./images/mail.png" />
          </Card>
        </Main>
        {/* <MainRight>
        <GlassForm />
      </MainRight> */}
      </Container>
    </Section>
  );
};

export default Contact;
