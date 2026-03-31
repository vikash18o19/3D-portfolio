import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const glowPulse = keyframes`
  0%,100% { box-shadow: 0 0 18px rgba(124,58,237,0.35), 0 0 40px rgba(124,58,237,0.12); }
  50%      { box-shadow: 0 0 28px rgba(124,58,237,0.55), 0 0 60px rgba(124,58,237,0.22); }
`;

const Wrapper = styled(motion.nav)`
  position: fixed;
  top: 1.4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999999;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.4rem;
  border-radius: 50px;
  background: rgba(10, 8, 25, 0.75);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(124, 58, 237, 0.28);
  animation: ${glowPulse} 3s ease-in-out infinite;
`;

const Logo = styled(Link)`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  background: linear-gradient(135deg, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-right: 0.6rem;
  border-right: 1px solid rgba(124, 58, 237, 0.3);
  margin-right: 0.4rem;
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0.35rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: ${p => (p.$active ? "#ffffff" : "#94a3b8")};
  background: ${p =>
    p.$active
      ? "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(14,165,233,0.3))"
      : "transparent"};
  border: ${p =>
    p.$active ? "1px solid rgba(124,58,237,0.5)" : "1px solid transparent"};
  transition: color 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: #e2e8f0;
    background: rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.3);
  }
`;

const Dot = styled(motion.span)`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #7c3aed;
  box-shadow: 0 0 6px #7c3aed;
  margin-left: 0.2rem;
  vertical-align: middle;
`;

const GlassNavbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/resume", label: "Resume" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <Wrapper
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 120 }}
      style={{
        background: scrolled
          ? "rgba(5,5,20,0.88)"
          : "rgba(10,8,25,0.75)",
      }}
    >
      <Logo to="/">VK</Logo>

      {links.map(({ to, label }) => {
        const active = location.pathname === to;
        return (
          <NavLink key={to} to={to} $active={active}>
            {label}
            {active && (
              <Dot
                layoutId="nav-dot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default GlassNavbar;
