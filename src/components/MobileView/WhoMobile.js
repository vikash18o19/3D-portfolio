import React, { useState, useEffect } from "react";
import "../stars.scss";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";
import MobileAbout from "./AboutMobile";

/* ─── animations ─────────────────────────────────────── */
const glowFloat = keyframes`
  0%,100% { box-shadow: 0 0 12px rgba(124,58,237,0.4), 0 4px 20px rgba(0,0,0,0.3); transform: translateY(0); }
  50%      { box-shadow: 0 0 22px rgba(124,58,237,0.65), 0 8px 30px rgba(0,0,0,0.3); transform: translateY(-4px); }
`;

const shimmerBg = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0%,100% { transform: scale(1); box-shadow: 0 0 20px rgba(124,58,237,0.4); }
  50%      { transform: scale(1.03); box-shadow: 0 0 35px rgba(124,58,237,0.65); }
`;

/* ─── styled components ──────────────────────────────── */
const Section = styled.div`
  position: relative;
  padding: 2rem 1.5rem;
  min-height: 100vh;
  background: #050510;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 800;
  margin-bottom: 2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ffffff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 1rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
    gap: 0.7rem;
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(124, 58, 237, 0.2);
  cursor: default;
  transition: border-color 0.3s ease;
  animation: ${glowFloat} ${p => 4 + p.$offset * 0.4}s ease-in-out infinite;
  animation-delay: ${p => p.$offset * 0.15}s;

  &:hover {
    border-color: rgba(124, 58, 237, 0.6);
    background: rgba(124, 58, 237, 0.1);
  }
`;

const IconWrap = styled.div`
  font-size: 2.6rem;
  color: #a78bfa;
  line-height: 1;
  filter: drop-shadow(0 0 6px rgba(167, 139, 250, 0.5));
`;

const SkillLabel = styled.span`
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
`;

const ResumeBtn = styled(motion.button)`
  display: block;
  margin: 0 auto;
  padding: 0.85rem 2.5rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #7c3aed, #0ea5e9);
  background-size: 200% 200%;
  animation: ${shimmerBg} 3s ease infinite, ${pulse} 2.5s ease-in-out infinite;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: none;
`;

/* ─── skills data ────────────────────────────────────── */
const skills = [
  { name: "C++",        icon: <CgCPlusPlus /> },
  { name: "HTML",       icon: <DiHtml5 /> },
  { name: "CSS",        icon: <DiCss3 /> },
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "React",      icon: <DiReact /> },
  { name: "Node.js",    icon: <DiNodejs /> },
  { name: "MongoDB",    icon: <DiMongodb /> },
  { name: "Python",     icon: <DiPython /> },
  { name: "Git",        icon: <DiGit /> },
  { name: "Next.js",    icon: <SiNextdotjs /> },
  { name: "Flutter",    icon: <TbBrandFlutter /> },
];

/* ─── component ──────────────────────────────────────── */
const MobileWho = ({ setOverflow }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, scale: 0.7, y: 20 },
    visible: { opacity: 1, scale: 1,   y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <Section>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <MobileAbout setOverflow={setOverflow} />

      <SectionTitle ref={ref}>Tech Stack</SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SkillGrid>
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} variants={itemVariants} $offset={i}>
              <IconWrap>{skill.icon}</IconWrap>
              <SkillLabel>{skill.name}</SkillLabel>
            </SkillCard>
          ))}
        </SkillGrid>
      </motion.div>

      <Link to="/resume" style={{ textDecoration: "none" }}>
        <ResumeBtn
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          style={{ animationPlayState: "running" }}
        >
          View Resume
        </ResumeBtn>
      </Link>
    </Section>
  );
};

export default MobileWho;
