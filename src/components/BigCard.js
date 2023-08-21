import React from "react";
import styled from "styled-components";
const Card = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;
const BigCard = ({ setIsCardActive, selectedCard, setOverflow }) => {
  return (
    <Card>
      <div
        style={{
          width: window.innerWidth <= 768 ? "80%" : "50%",
          // width: window.innerWidth <= 768 ? "80vw" : "50vw",
          height: "70vh",
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {selectedCard.backImgSrc && (
          <img
            src={selectedCard.backImgSrc}
            alt="Logo"
            style={{ width: window.innerWidth <= 768 ? "40vh" : "35vh" }}
          />
        )}
        <p
          style={{
            fontFamily: "Gill Sans",
            fontSize: window.innerWidth >= 768 ? "1rem" : "1rem",
            padding: "3rem",
            textAlign: "center",
          }}
        >
          {selectedCard.description}
        </p>
        {selectedCard.InvolvedTech && (
          <p
            style={{
              fontFamily: "Gill Sans",
              fontSize: window.innerWidth <= 768 ? "1rem" : "1rem",
              padding: "3rem",
              color: "black",
              textAlign: "center",
            }}
          >
            Involved Tech:{"    "} {selectedCard.InvolvedTech}
          </p>
        )}
        <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
          <button
            onClick={() => {
              setIsCardActive(false);
              setOverflow(true);
            }}
            style={{
              width: "5rem",
              height: "2rem",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          {selectedCard.link && (
            <button
              onClick={() => {
                window.location.href = selectedCard.link;
                setOverflow(true);
              }}
              style={{
                width: "5rem",
                height: "2rem",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            >
              View
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BigCard;
