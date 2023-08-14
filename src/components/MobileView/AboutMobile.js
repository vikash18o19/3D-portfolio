import React from "react";
import { Col, Row } from "react-bootstrap";
import { TypeAbout } from "../Type";
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
      <Row style={{ padding: "2rem" }}>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
            margin: "0.5rem",
            borderRadius: "5px",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.25)",
            hover: "scale(1.1)",
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
