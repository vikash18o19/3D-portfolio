import React, { useState, useEffect } from "react";
import "../stars.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
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
import { TbBrandFlutter, TbSql } from "react-icons/tb";
import MobileAbout from "./AboutMobile";

const MobileWho = ({ setOverflow }) => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleMotion = (event) => {
      const { accelerationIncludingGravity } = event;
      setAcceleration({
        x: accelerationIncludingGravity.x,
        y: accelerationIncludingGravity.y,
        z: accelerationIncludingGravity.z,
      });
      console.log(accelerationIncludingGravity);
    };

    window.addEventListener("devicemotion", handleMotion);

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, []);
  const calculateParallax = (axis, factor) => {
    return `${axis * factor}px`;
  };

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
      <MobileAbout setOverflow={setOverflow} />
      <Row style={{ marginTop: "5vh", marginBottom: "3vh" }}>
        <Col ref={ref}>
          <h1 className="text-center" style={{ color: "white" }}>
            Skills
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ color: "white" }}>
          <div
            className="d-flex justify-content-center flex-wrap flex-"
            style={{
              width: "100%",
              height: "100%",
              transform: `translate(
            ${calculateParallax(acceleration.x, -1.3)},
            ${calculateParallax(acceleration.y, 1.3)}
          )`,
            }}
          >
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={index}
                  // initial={{ y: -100 }}
                  animate={{
                    // y: inView ? 0 : -50,
                    scale: inView ? 1.1 : 1, // Adding scale animation
                  }}
                  // exit={{ opacity: 0, y: 50 }}
                  transition={{
                    delay: inView ? 0.2 + index * 0.1 : 0,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="d-flex justify-content-center align-items-center m-2 tech-icons"
                  // Apply the ref
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div className="p-2">{skill.icon}</div>
                    <div
                      className="p-2"
                      style={{ marginRight: "10px", fontSize: "1rem" }}
                    >
                      {skill.name}
                    </div>
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
          scale: [1, 1.02, 1],
          transition: { repeat: Infinity, duration: 1 },
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Row>
          <Link to="/resume">
            <Button
              variant="outline-dark"
              className="btn-lg"
              style={{ width: "15rem", color: "white", borderColor: "white" }}
            >
              View Resume
            </Button>
          </Link>
        </Row>
      </motion.div>
    </div>
  );
};

export default MobileWho;
