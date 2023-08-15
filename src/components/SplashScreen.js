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
  z-index: 9999;
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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 20);

    if (progress >= 100) {
      clearInterval(interval);
      setLoading(false);
      controls.start({ opacity: 0, scale: 1.5 });
    }

    return () => clearInterval(interval);
  }, [progress, controls]);

  return (
    <StyledSplashScreen
      initial={{ opacity: 1, scale: 1 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      {loading ? (
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
      ) : null}
    </StyledSplashScreen>
  );
};

export default SplashScreen;
