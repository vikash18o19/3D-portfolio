import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

/* ─── animations ─────────────────────────────────────── */
const gradientShift = keyframes`
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
`;
const orbitFloat = keyframes`
  0%,100% { transform: translateY(0px) rotate(0deg); }
  50%      { transform: translateY(-20px) rotate(180deg); }
`;

/* ─── background ─────────────────────────────────────── */
const Section = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #050510;
  overflow: hidden;
  padding: 5rem 1.5rem;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  animation: ${orbitFloat} ${p => p.dur || 8}s ease-in-out infinite;
  animation-delay: ${p => p.delay || 0}s;
`;

/* ─── header ─────────────────────────────────────────── */
const SectionLabel = styled.p`
  font-size: 0.8rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 900;
  text-align: center;
  margin: 0 0 0.6rem;
  background: linear-gradient(135deg, #ffffff 20%, #a78bfa 60%, #38bdf8 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: #475569;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 420px;
`;

/* ─── cards grid ─────────────────────────────────────── */
const CardsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  max-width: 780px;
  width: 100%;
`;

const SocialCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  padding: 1.8rem 1.4rem;
  width: 160px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(124, 58, 237, 0.2);
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
      ${p => p.$color1 || "rgba(124,58,237,0.12)"},
      ${p => p.$color2 || "rgba(14,165,233,0.06)"}
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    border-radius: 20px;
  }

  &:hover {
    border-color: ${p => p.$borderColor || "rgba(124,58,237,0.6)"};
    &::before { opacity: 1; }
  }

  @media (max-width: 480px) {
    width: 140px;
    padding: 1.4rem 1rem;
  }
`;

const IconBox = styled(motion.div)`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${p => p.$bg || "rgba(124,58,237,0.15)"};
  border: 1px solid ${p => p.$border || "rgba(124,58,237,0.3)"};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SocialImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.85;
`;

const CardLabel = styled.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: #94a3b8;
  letter-spacing: 0.5px;
`;

const CardHandle = styled.span`
  font-size: 0.7rem;
  color: #475569;
  text-align: center;
  line-height: 1.3;
`;

/* ─── CTA footer ─────────────────────────────────────── */
const CtaEmail = styled(motion.a)`
  margin-top: 3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #7c3aed, #0ea5e9);
  background-size: 200% 200%;
  animation: ${gradientShift} 4s ease infinite;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.4);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 50px rgba(124, 58, 237, 0.65);
    color: #fff;
  }
`;

/* ─── data ───────────────────────────────────────────── */
const socials = [
  {
    label: "GitHub",
    handle: "vikash18o19",
    imgSrc: "./images/github.png",
    href: "https://github.com/vikash18o19",
    color1: "rgba(50,50,80,0.2)",
    color2: "rgba(100,100,130,0.08)",
    borderColor: "rgba(180,180,200,0.5)",
    iconBg: "rgba(255,255,255,0.06)",
    iconBorder: "rgba(255,255,255,0.15)",
  },
  {
    label: "Instagram",
    handle: "@_vikash_18_",
    imgSrc: "./images/instagram.png",
    href: "https://www.instagram.com/_vikash_18_/",
    color1: "rgba(225,48,108,0.12)",
    color2: "rgba(250,126,30,0.06)",
    borderColor: "rgba(225,48,108,0.5)",
    iconBg: "rgba(225,48,108,0.1)",
    iconBorder: "rgba(225,48,108,0.3)",
  },
  {
    label: "LinkedIn",
    handle: "vikash-kumar",
    imgSrc: "./images/linkedin.png",
    href: "https://www.linkedin.com/in/vikash-kumar-156675227",
    color1: "rgba(10,102,194,0.15)",
    color2: "rgba(10,102,194,0.05)",
    borderColor: "rgba(10,102,194,0.55)",
    iconBg: "rgba(10,102,194,0.12)",
    iconBorder: "rgba(10,102,194,0.3)",
  },
];

/* ─── component ──────────────────────────────────────── */
const Contact = () => {
  const [sectionRef, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(sectionRef);
    return () => obs.disconnect();
  }, [sectionRef]);

  const cardVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2, duration: 0.5, type: "spring", stiffness: 90 },
    }),
  };

  return (
    <Section ref={setRef}>
      {/* background orbs */}
      <Orb
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          bottom: "-80px",
          right: "-80px",
        }}
        dur={10}
        delay={0}
      />
      <Orb
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          top: "5%",
          left: "-60px",
        }}
        dur={8}
        delay={2}
      />

      <SectionLabel>Open to opportunities</SectionLabel>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Let&apos;s Connect
      </SectionTitle>
      <Subtitle>
        I&apos;m always open to new ideas, collaborations, or just a good
        conversation. Find me on any platform below.
      </Subtitle>

      <CardsRow>
        {socials.map((s, i) => (
          <SocialCard
            key={s.label}
            custom={i}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            $color1={s.color1}
            $color2={s.color2}
            $borderColor={s.borderColor}
            onClick={() => window.open(s.href, "_blank", "noopener,noreferrer")}
          >
            <IconBox
              $bg={s.iconBg}
              $border={s.iconBorder}
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.4 }}
            >
              <SocialImg src={s.imgSrc} alt={s.label} />
            </IconBox>
            <CardLabel>{s.label}</CardLabel>
            <CardHandle>{s.handle}</CardHandle>
          </SocialCard>
        ))}
      </CardsRow>

      <CtaEmail
        href="mailto:vikash.18.dev@gmail.com?subject=Hello%20Vikash&body=Hi%20Vikash,"
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Send me an Email
      </CtaEmail>
    </Section>
  );
};

export default Contact;
