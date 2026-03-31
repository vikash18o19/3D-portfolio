import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BigCard from "./BigCard";
import "./stars.scss";

/* ─── animations ─────────────────────────────────────── */
const gradientShift = keyframes`
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
`;

/* ─── layout ─────────────────────────────────────────── */
const Section = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  background: #050510;
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const SectionLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 0.6rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #ffffff 30%, #a78bfa 65%, #38bdf8 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  margin: 0;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`;

/* ─── project card ────────────────────────────────────── */
const Card = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(124, 58, 237, 0.2);
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.55);
  }
`;

const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 40%,
      rgba(5, 5, 16, 0.9) 100%
    );
  }
`;

const CardBody = styled.div`
  padding: 1.2rem 1.4rem 1.4rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  font-weight: 700;
  color: #e2e8f0;
`;

const CardDesc = styled.p`
  margin: 0 0 0.8rem;
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  font-size: 0.68rem;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: #a78bfa;
  font-weight: 500;
`;

const HoverOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.12),
    rgba(14, 165, 233, 0.08)
  );
  border-radius: 20px;
  pointer-events: none;
`;

const GlowBorder = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border-radius: 21px;
  background: linear-gradient(135deg, #7c3aed, #0ea5e9, #7c3aed);
  background-size: 200% 200%;
  animation: ${gradientShift} 3s ease infinite;
  z-index: -1;
  opacity: 0;
  pointer-events: none;
`;

/* ─── data ───────────────────────────────────────────── */
const cards = [
  {
    id: 1,
    title: "Soil App",
    frontImgSrc: "./images/SoilApp.png",
    backImgSrc: "./images/app.png",
    link: "https://github.com/vikash18o19/soil-app-frontend",
    description: "Flutter frontend for BIT Mesra Final Year project — AI-powered soil classification app.",
    tags: ["Flutter", "AI", "Flask"],
  },
  {
    id: 2,
    title: "Traffic Sign Recognition",
    frontImgSrc: "./images/NeuralNet.png",
    backImgSrc: "./images/Traffic.png",
    link: "https://github.com/vikash18o19/Traffic_sign_recognition",
    description: "Neural Network achieving 93% accuracy on GTSRB dataset using TensorFlow CNN.",
    tags: ["Python", "TensorFlow", "CNN"],
  },
  {
    id: 3,
    title: "Finger Painter",
    frontImgSrc: "./images/painter.png",
    backImgSrc: "./images/finger.png",
    link: "https://github.com/vikash18o19/Finger_Painter",
    description: "Real-time finger painting using MediaPipe hand-tracking and OpenCV.",
    tags: ["Python", "MediaPipe", "OpenCV"],
  },
  {
    id: 4,
    title: "Soil GAN",
    frontImgSrc: "./images/GAN.png",
    backImgSrc: "./images/GanModel.png",
    link: "https://github.com/vikash18o19/Soil-GAN",
    description: "DC-GAN model trained with PyTorch to generate synthetic soil images.",
    tags: ["PyTorch", "DC-GAN", "Python"],
  },
  {
    id: 5,
    title: "Sharito",
    frontImgSrc: "./images/sharito.png",
    backImgSrc: "./images/sharito-real.png",
    link: "https://github.com/vikash18o19/sharito",
    description: "Real-time social media platform with posts, friends, and Socket.io chat.",
    tags: ["React", "MongoDB", "Socket.io", "Tailwind"],
  },
  {
    id: 6,
    title: "3D Portfolio",
    frontImgSrc: "./images/portfolio-logo.png",
    backImgSrc: "./images/portfolio.png",
    link: "https://github.com/vikash18o19/3D-portfolio",
    description: "This portfolio — built with React, Framer Motion, Three.js & styled-components.",
    tags: ["React", "Three.js", "Framer Motion"],
  },
];

/* ─── component ──────────────────────────────────────── */
const Works = ({ setOverflow }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isCardActive, setIsCardActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } });
    } else {
      animation.start({ opacity: 0, y: 60 });
    }
  }, [inView]);

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const cardVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90 } },
  };

  return (
    <Section>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      {isCardActive && (
        <BigCard
          setIsCardActive={setIsCardActive}
          selectedCard={selectedCard}
          setOverflow={setOverflow}
        />
      )}

      <SectionHeader>
        <SectionLabel>What I&apos;ve built</SectionLabel>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          Projects &amp; Works
        </SectionTitle>
      </SectionHeader>

      <Grid
        ref={ref}
        variants={gridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {cards.map(card => (
          <Card
            key={card.id}
            variants={cardVariants}
            onHoverStart={() => setHoveredId(card.id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ y: -6, scale: 1.01 }}
            onClick={() => {
              setIsCardActive(true);
              setSelectedCard(card);
              setOverflow(false);
            }}
          >
            {/* animated glow border on hover */}
            <GlowBorder
              animate={{ opacity: hoveredId === card.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            <CardImage>
              <motion.img
                src={hoveredId === card.id ? card.backImgSrc : card.frontImgSrc}
                alt={card.title}
                animate={{
                  scale: hoveredId === card.id ? 1.08 : 1,
                  filter: hoveredId === card.id
                    ? "brightness(0.75) saturate(1.2)"
                    : "brightness(1)",
                }}
                transition={{ duration: 0.4 }}
              />
            </CardImage>

            {hoveredId === card.id && (
              <HoverOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            <CardBody>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.description}</CardDesc>
              <TagRow>
                {card.tags.map(t => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </TagRow>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Works;
