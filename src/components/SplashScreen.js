import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const StyledSplashScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 9998;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressText = styled.div`
  margin-top: 10px;
  font-size: 24px;
  color: #fff;
`;

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const sliderControls = useAnimation();
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 20);

    if (progress >= 75) {
      controls.start({ opacity: 0, scale: 1 });
    }
    if (progress >= 90) {
      sliderControls.start({ opacity: 0, scaleX: 1.5 });
    }
    if (progress >= 100) {
      clearInterval(interval);
      setLoading(false);
    }

    return () => clearInterval(interval);
  }, [progress, controls]);

  if (!loading) {
    return null; // Hide the splash screen when not loading
  }

  return (
    <StyledSplashScreen
      initial={{ opacity: 1, scale: 1 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{
          opacity: 1,
          scaleX: 0,
          zIndex: 9999,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
        }}
        animate={sliderControls}
        transition={{ duration: 0.5 }}
        style={{ height: "100vh", backgroundColor: "gray" }}
      ></motion.div>
      <ContentWrapper>
        <Spinner
          animation="border"
          variant="light"
          style={{
            width: "10vw",
            height: "10vw",
          }}
        />
        <ProgressText>{progress}%</ProgressText>
      </ContentWrapper>
    </StyledSplashScreen>
  );
};

export default SplashScreen;
