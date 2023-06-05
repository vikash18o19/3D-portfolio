import React, { Suspense, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  inView,
} from "framer-motion";

const Section = styled(motion.div)`
  height: 400vh;
  /* scroll-snap-align: center; */
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled(motion.div)`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
    width: 400;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Right = styled.div`
  color: grey;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled(motion.p)`
  font-size: 24px;
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
  console.log(Percent);

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

  return (
    <Section
      ref={ref}
      style={{ backgroundColor: `${Percent < 100 ? "black" : "white"}` }}
    >
      <Container
        style={{
          bottom: "10vh",
          position: `${Percent >= 0.1 && Percent < 100 ? "fixed" : "absolute"}`,
        }}
      >
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./images/white_line.png" />
            <Subtitle>Who am I?</Subtitle>
          </WhatWeDo>
          <Desc
            style={{
              opacity: pathLength,
              // color: currentProgressColor,
            }}
          >
            A tech enthusiast who believes in
            <br />
            technology and innovation.
          </Desc>
          <Button>See our works</Button>
        </Right>
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
