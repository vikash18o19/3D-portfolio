import React, { useRef, useEffect, useState, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import "./stars.scss";

/* ─── keyframes ─────────────────────────────────────── */
const floatA = keyframes`
  0%,100% { transform: translateY(0px) scale(1); }
  50%      { transform: translateY(-40px) scale(1.08); }
`;
const floatB = keyframes`
  0%,100% { transform: translateY(0px) scale(1) rotate(0deg); }
  33%      { transform: translateY(-25px) scale(1.05) rotate(120deg); }
  66%      { transform: translateY(15px) scale(0.95) rotate(240deg); }
`;
const scrollBounce = keyframes`
  0%,100% { transform: translateY(0); opacity: 1; }
  50%      { transform: translateY(8px); opacity: 0.4; }
`;

/* ─── background orbs ────────────────────────────────── */
const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(${p => p.blur || 80}px);
  pointer-events: none;
  animation: ${p => (p.variant === "b" ? floatB : floatA)}
    ${p => p.dur || 8}s ease-in-out infinite;
  animation-delay: ${p => p.delay || 0}s;
`;

/* ─── layout ─────────────────────────────────────────── */
const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: #050510;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.2rem;
  padding: 0 1.5rem;
  max-width: 800px;
`;

/* ─── typography ─────────────────────────────────────── */
const Greeting = styled(motion.p)`
  font-size: clamp(0.75rem, 1.5vw, 1rem);
  color: #94a3b8;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 0;
`;

const NameText = styled(motion.h1)`
  margin: 0;
  font-size: clamp(3.5rem, 12vw, 9rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -3px;
  background: linear-gradient(135deg, #ffffff 10%, #a78bfa 50%, #38bdf8 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 40px rgba(167, 139, 250, 0.35));
`;

const RoleWrapper = styled(motion.h2)`
  margin: 0;
  font-size: clamp(1rem, 2.8vw, 1.6rem);
  font-weight: 400;
  color: #a78bfa;
  letter-spacing: 2px;
  min-height: 2rem;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #a78bfa;
  margin-left: 3px;
  vertical-align: middle;
  animation: ${keyframes`0%,100%{opacity:1}50%{opacity:0}`} 0.8s step-end infinite;
`;

const TagLine = styled(motion.p)`
  margin: 0;
  font-size: clamp(0.85rem, 1.8vw, 1.05rem);
  color: #475569;
  max-width: 480px;
  line-height: 1.7;
`;

/* ─── CTA buttons ────────────────────────────────────── */
const CTARow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryBtn = styled(motion.button)`
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #7c3aed, #0ea5e9);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 0 25px rgba(124, 58, 237, 0.45);
  transition: box-shadow 0.3s ease;
  &:hover { box-shadow: 0 0 40px rgba(124, 58, 237, 0.7); }
`;

const OutlineBtn = styled(motion.button)`
  padding: 0.75rem 2rem;
  background: transparent;
  border: 1.5px solid rgba(124, 58, 237, 0.55);
  border-radius: 50px;
  color: #a78bfa;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background 0.3s ease, border-color 0.3s ease;
  &:hover {
    background: rgba(124, 58, 237, 0.12);
    border-color: #7c3aed;
  }
`;

/* ─── scroll indicator ───────────────────────────────── */
const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: #334155;
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  z-index: 5;
`;

const ScrollDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #7c3aed;
  box-shadow: 0 0 8px #7c3aed;
  animation: ${scrollBounce} 1.4s ease-in-out infinite;
`;

/* ─── 3-D distorted sphere ───────────────────────────── */
const AnimSphere = () => (
  <Canvas
    style={{
      position: "absolute",
      top: 0,
      right: 0,
      width: "55vw",
      height: "100vh",
      zIndex: 1,
      pointerEvents: "none",
    }}
    camera={{ position: [0, 0, 4], fov: 50 }}
  >
    <Suspense fallback={null}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[4, 4, 4]} intensity={1.8} color="#a78bfa" />
      <pointLight position={[-4, -2, -4]} intensity={0.6} color="#38bdf8" />
      <Stars radius={80} depth={50} count={3000} factor={3} fade speed={1} />
      <Sphere args={[1, 120, 120]} scale={2.3}>
        <MeshDistortMaterial
          color="#120929"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.1}
          metalness={0.9}
          emissive="#5b21b6"
          emissiveIntensity={0.35}
        />
      </Sphere>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Suspense>
  </Canvas>
);

/* ─── typewriter hook ────────────────────────────────── */
const ROLES = [
  "Full Stack Developer",
  "ML Engineer",
  "Flutter Developer",
  "Open Source Builder",
];

const useTypewriter = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx(i => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return text;
};

/* ─── component ──────────────────────────────────────── */
const Hero = () => {
  const role = useTypewriter();

  return (
    <Section>
      {/* background orbs */}
      <Orb
        style={{
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)",
          top: "-120px",
          left: "-80px",
        }}
        dur={9}
        delay={0}
      />
      <Orb
        variant="b"
        style={{
          width: 380,
          height: 380,
          background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)",
          bottom: "5vh",
          left: "15%",
        }}
        blur={90}
        dur={12}
        delay={1.5}
      />
      <Orb
        style={{
          width: 260,
          height: 260,
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          top: "20%",
          left: "30%",
        }}
        blur={60}
        dur={7}
        delay={3}
      />

      {/* 3-D sphere (right side) */}
      <AnimSphere />

      {/* main text content */}
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I&apos;m
        </Greeting>

        <NameText
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 90 }}
        >
          VIKASH
        </NameText>

        <RoleWrapper
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {role}
          <Cursor />
        </RoleWrapper>

        <TagLine
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          Building beautiful digital experiences with code, creativity, and a
          passion for innovation.
        </TagLine>

        <CTARow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <PrimaryBtn
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("works-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </PrimaryBtn>
          <OutlineBtn
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </OutlineBtn>
        </CTARow>
      </HeroContent>

      {/* scroll indicator */}
      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <ScrollDot />
        <span>Scroll</span>
      </ScrollHint>
    </Section>
  );
};

export default Hero;
