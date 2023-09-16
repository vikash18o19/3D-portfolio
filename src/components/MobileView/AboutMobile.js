import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { TypeAbout } from "../Type";
import BigCard from "../BigCard";
const MobileAbout = ({ setOverflow }) => {
  const [isCardActive, setIsCardActive] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const experience = [
    {
      id: 1,
      title: "Research Intern",
      company: "University of Guelph",
      location: "Canada",
      duration: "June 2022 - October 2022",
      description:
        "Development of application using Flutter for soil classification using AI. Backend developed using Node and Express. Models where deployed using Flask.",
      InvolvedTech:
        "Flutter, Python, Flask, NodeJs,Machine Learning for development of models.",
    },
    {
      id: 2,
      title: "ML Intern",
      company: "IIT Indore",
      location: "Indore",
      duration: "May 2022 - June 2022",
      description:
        "Development of an ML model which achieved 93%  accuracy on test data. Traffic Sign Recognition via Image Processing using GTSRB Dataset. CNN Model to be used in Automatic cars. ",
      InvolvedTech: "Python, CNN, Tensorflow",
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "Inayat",
      location: "Rajasthan",
      duration: "May 2022 - June 2022",
      description: "Development of website.",
      InvolvedTech: "HTML, CSS, JAVASCRIPT, BOOTSTRAP and FIREBASE",
    },
  ];
  return (
    <div style={{ color: "white", paddingBottom: "2rem", paddingTop: "4rem" }}>
      <Row>
        <Col
          style={{
            paddingBottom: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <p style={{ fontSize: "1.5rem" }} className="text-center">
            Hey there Vikash from this side..
          </p>
          <p style={{ fontSize: "1.5rem" }} className="text-center">
            <TypeAbout />
          </p>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <p className="text-center"></p>
        </Col>
      </Row> */}
      <Row style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
        <Col>
          <h1 className="text-center">Experience</h1>
        </Col>
      </Row>
      {isCardActive && (
        <BigCard
          selectedCard={selectedCard}
          setIsCardActive={setIsCardActive}
          setOverflow={setOverflow}
        />
      )}
      <Row style={{ padding: "2rem" }}>
        {experience.map((exp) => (
          <Col
            key={exp.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "5px",
              backdropFilter: "blur(2px)",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsCardActive(true);
              setSelectedCard(exp);
              setOverflow(false);
            }}
          >
            <p className="text-center">
              {exp.title} <br /> {exp.company} ,{exp.location}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MobileAbout;
