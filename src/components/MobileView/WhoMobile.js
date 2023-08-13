import React, { useState } from "react";
import "../stars.scss";

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
  return (
    <div style={{ zIndex: "100", padding: "2rem" }}>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <MobileAbout />
      <Row>
        <Col>
          <h1 className="text-center" style={{ color: "white" }}>
            Skills
          </h1>
        </Col>
      </Row>
      <Row>
        <Col style={{ color: "white" }}>
          <div className="d-flex justify-content-center flex-wrap">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="d-flex justify-content-center align-items-center m-2"
              >
                <div style={{}} className="p-2">
                  {skill.icon}
                </div>
                <div className="p-2">{skill.name}</div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default MobileWho;
