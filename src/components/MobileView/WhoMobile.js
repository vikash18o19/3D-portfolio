import React, { useState } from "react";
import "../stars.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
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
import { TbBrandFlutter, TbSql } from "react-icons/tb";
import MobileAbout from "./AboutMobile";

const MobileWho = () => {
  const [skills, setSkills] = useState([
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "HTML", icon: <DiHtml5 /> },
    { name: "CSS", icon: <DiCss3 /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "React", icon: <DiReact /> },
    { name: "NodeJS", icon: <DiNodejs /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Python", icon: <DiPython /> },
    { name: "Git", icon: <DiGit /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Flutter", icon: <TbBrandFlutter /> },
  ]);

  const [ref, inView] = useInView({ triggerOnce: true }); // Initialize useInView hook
  const handleDownload = async () => {
    const resumeDownloadLink =
      "https://sharito-backend-9wnyh.ondigitalocean.app/download/resume";

    fetch(resumeDownloadLink, { method: "GET", responseType: "blob" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "your-resume.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch((error) => {
        alert("Try again later..");
        console.error("Error downloading resume:", error);
      });
  };
  return (
    <div
      style={{
        zIndex: "100",
        padding: "2rem",
        minHeight: "100vh",
        paddingRight: "5vw",
        paddingLeft: "5vw",
      }}
    >
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <MobileAbout />
      <Row style={{ marginTop: "5vh", marginBottom: "3vh" }}>
        <Col ref={ref}>
          <h1 className="text-center" style={{ color: "white" }}>
            Skills
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ color: "white" }}>
          <div className="d-flex justify-content-center flex-wrap">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : -50,
                    scale: inView ? 1.1 : 1, // Adding scale animation
                  }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    delay: inView ? 0.2 + index * 0.1 : 0,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="d-flex justify-content-center align-items-center m-2"
                  // Apply the ref
                >
                  <div className="p-2 tech-icons">{skill.icon}</div>
                  <div className="p-2" style={{ marginRight: "10px" }}>
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Col>
      </Row>
      <motion.div
        style={{
          marginTop: "5vh",
          marginBottom: "3vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          transition: { repeat: Infinity, duration: 1 },
        }}
        whileHover={{ scale: 1.4 }}
      >
        <Button
          variant="outline-dark"
          onClick={handleDownload}
          className="btn-lg"
          style={{ width: "20rem", color: "white", borderColor: "white" }}
        >
          Download Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default MobileWho;
