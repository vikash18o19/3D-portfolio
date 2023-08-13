import React from "react";
import { Col, Row } from "react-bootstrap";

const MobileAbout = () => {
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
          <p className="text-center">
            Hey There.. Vikash this side. I am a full stack developer
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
      <Row style={{ padding: "2rem" }}>
        <Col
          style={{
            padding: "0.5rem",
            margin: "0.5rem",
            borderRadius: "5px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
          }}
        >
          <p className="text-center">
            Research Intern <br /> University of Guelph ,Canada
          </p>
        </Col>
        <Col
          style={{
            margin: "0.5rem",
            padding: "0.5rem",
            borderRadius: "5px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
          }}
        >
          <p className="text-center">
            ML Intern <br /> IIT Indore
          </p>
        </Col>
        <Col
          style={{
            padding: "0.5rem",
            margin: "0.5rem",
            borderRadius: "5px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
          }}
        >
          <p className="text-center">
            Web Development Intern <br /> Inayat, Rajasthan
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default MobileAbout;
