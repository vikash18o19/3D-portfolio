import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { TypeAbout } from "../Type";
import BigCard from "../BigCard";

/* ─── animations ─────────────────────────────────────── */
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ─── styled components ──────────────────────────────── */
const IntroBlock = styled.div`
  text-align: center;
  padding: 4rem 1rem 1rem;
  color: #e2e8f0;
`;

const IntroName = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  color: #94a3b8;
  margin-bottom: 0.5rem;
  span {
    background: linear-gradient(135deg, #a78bfa, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
`;

const TypeRow = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #a78bfa;
  margin-bottom: 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ExpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  padding: 0 0.5rem 1.5rem;
`;

const ExpCard = styled(motion.div)`
  padding: 1.4rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(124, 58, 237, 0.25);
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.08),
      rgba(14, 165, 233, 0.04)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: rgba(124, 58, 237, 0.6);
    background: rgba(124, 58, 237, 0.08);
    &::before { opacity: 1; }
  }
`;

const ExpTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.6rem;
`;

const ExpDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #0ea5e9);
  box-shadow: 0 0 8px rgba(124, 58, 237, 0.7);
  flex-shrink: 0;
  margin-top: 6px;
`;

const ExpTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
`;

const ExpCompany = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: #a78bfa;
  font-weight: 500;
`;

const ExpDuration = styled.p`
  margin: 0.4rem 0 0;
  font-size: 0.75rem;
  color: #475569;
  letter-spacing: 0.5px;
`;

const TechPill = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.2rem 0.55rem;
  border-radius: 50px;
  background: rgba(124, 58, 237, 0.18);
  border: 1px solid rgba(124, 58, 237, 0.35);
  color: #a78bfa;
  margin: 0.25rem 0.2rem 0 0;
`;

/* ─── data ───────────────────────────────────────────── */
const experience = [
  {
    id: 1,
    title: "Research Intern",
    company: "University of Guelph",
    location: "Canada",
    duration: "Jun 2022 – Oct 2022",
    description:
      "Development of application using Flutter for soil classification using AI. Backend developed using Node and Express. Models were deployed using Flask.",
    InvolvedTech: "Flutter, Python, Flask, NodeJs, Machine Learning for development of models.",
    tech: ["Flutter", "Python", "Flask", "Node.js", "ML"],
  },
  {
    id: 2,
    title: "ML Intern",
    company: "IIT Indore",
    location: "Indore",
    duration: "May 2022 – Jun 2022",
    description:
      "Development of an ML model which achieved 93% accuracy on test data. Traffic Sign Recognition via Image Processing using GTSRB Dataset. CNN Model to be used in Autonomous cars.",
    InvolvedTech: "Python, CNN, Tensorflow",
    tech: ["Python", "CNN", "TensorFlow"],
  },
  {
    id: 3,
    title: "Web Dev Intern",
    company: "Inayat",
    location: "Rajasthan",
    duration: "May 2022 – Jun 2022",
    description: "Development of website.",
    InvolvedTech: "HTML, CSS, JAVASCRIPT, BOOTSTRAP and FIREBASE",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase"],
  },
];

/* ─── component ──────────────────────────────────────── */
const MobileAbout = ({ setOverflow }) => {
  const [isCardActive, setIsCardActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <div>
      {isCardActive && (
        <BigCard
          selectedCard={selectedCard}
          setIsCardActive={setIsCardActive}
          setOverflow={setOverflow}
        />
      )}

      <IntroBlock>
        <IntroName>
          Hey there — <span>Vikash</span> here
        </IntroName>
        <TypeRow>
          <TypeAbout />
        </TypeRow>
      </IntroBlock>

      <div style={{ padding: "2rem 1rem 1rem" }}>
        <SectionTitle>Experience</SectionTitle>
        <ExpGrid>
          {experience.map((exp, i) => (
            <ExpCard
              key={exp.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              onClick={() => {
                setIsCardActive(true);
                setSelectedCard(exp);
                setOverflow(false);
              }}
            >
              <ExpTop>
                <ExpDot />
                <div>
                  <ExpTitle>{exp.title}</ExpTitle>
                  <ExpCompany>
                    {exp.company} &bull; {exp.location}
                  </ExpCompany>
                </div>
              </ExpTop>
              <ExpDuration>{exp.duration}</ExpDuration>
              <div style={{ marginTop: "0.6rem" }}>
                {exp.tech.map(t => (
                  <TechPill key={t}>{t}</TechPill>
                ))}
              </div>
            </ExpCard>
          ))}
        </ExpGrid>
      </div>
    </div>
  );
};

export default MobileAbout;
