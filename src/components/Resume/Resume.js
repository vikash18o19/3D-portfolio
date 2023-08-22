import "../stars.scss";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Link } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(800);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <Container fluid className="resume-section">
        <Row>
          <Link to="/">
            <Button
              variant="outline-dark"
              className="btn-lg"
              style={{
                width: "15rem",
                color: "white",
                borderColor: "white",
                display: "block",
                margin: "0 auto",
              }}
            >
              Back
            </Button>
          </Link>
        </Row>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 1000 ? 1.7 : 0.6}
              renderTextLayer={false}
            />
          </Document>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            href={pdf}
            target="_blank"
            variant="outline-dark"
            className="btn-lg"
            style={{ width: "15rem", color: "white", borderColor: "white" }}
          >
            Download
          </Button>
        </Row>
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </Container>
    </div>
  );
}

export default Resume;
