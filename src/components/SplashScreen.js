import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";

/* ─── animations ─────────────────────────────────────── */
const gradientShift = keyframes`
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
`;

const orbFloat = keyframes`
  0%,100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-30px) scale(1.06); }
`;

/* ─── styled ─────────────────────────────────────────── */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #050510;
  z-index: 99999;
  overflow: hidden;
`;

const BackOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  animation: ${orbFloat} ${p => p.dur}s ease-in-out infinite;
  animation-delay: ${p => p.delay || 0}s;
`;

const LogoText = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #ffffff 20%, #a78bfa 55%, #38bdf8 90%);
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.2rem;
  line-height: 1;
`;

const SubText = styled(motion.p)`
  font-size: 0.75rem;
  color: #334155;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 0 0 2.5rem;
`;

const BarTrack = styled.div`
  width: min(320px, 70vw);
  height: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
  position: relative;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  border-radius: 2px;
  background: linear-gradient(90deg, #7c3aed, #38bdf8);
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.6);
`;

const PercentText = styled(motion.p)`
  margin-top: 1rem;
  font-size: 0.72rem;
  color: #475569;
  letter-spacing: 3px;
`;

/* ─── component ──────────────────────────────────────── */
const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 1;
      });
    }, 18);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      controls
        .start({ opacity: 0, scale: 1.05, transition: { duration: 0.6, delay: 0.15 } })
        .then(() => setLoading(false));
    }
  }, [progress, controls]);

  if (!loading) return null;

  return (
    <Overlay initial={{ opacity: 1 }} animate={controls}>
      {/* background orbs */}
      <BackOrb
        dur={7}
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          top: "-100px",
          left: "-100px",
        }}
      />
      <BackOrb
        dur={9}
        delay={1.5}
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)",
          bottom: "-60px",
          right: "-60px",
        }}
      />

      <LogoText
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        VIKASH
      </LogoText>

      <SubText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Portfolio
      </SubText>

      <BarTrack>
        <BarFill
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </BarTrack>

      <PercentText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {progress}%
      </PercentText>
    </Overlay>
  );
};

export default SplashScreen;
