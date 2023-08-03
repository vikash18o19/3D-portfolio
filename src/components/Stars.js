import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StarDot = styled.div`
  position: fixed;
  width: 3px;
  height: 3px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  pointer-events: none;
`;

const Stars = () => {
  const starsRef = useRef([]);

  useEffect(() => {
    const numStars = 100;
    const colors = ["#ff0000", "#00ff00", "#0000ff"]; // Add more colors if needed
    const container = document.getElementById("stars-container");

    // Generate random stars
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(star);
      starsRef.current.push(star);
    }

    // Move stars on mouse move
    const onMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      for (const star of starsRef.current) {
        const rect = star.getBoundingClientRect();
        const starX = rect.left + rect.width / 2;
        const starY = rect.top + rect.height / 2;

        const deltaX = mouseX - starX;
        const deltaY = mouseY - starY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const force = 1000 / (distance * distance);

        star.style.transform = `translate(${deltaX * force}px, ${
          deltaY * force
        }px)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      id="stars-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    ></div>
  );
};

export default Stars;
