import React from "react";
import Typewriter from "typewriter-effect";

export function Type() {
  return (
    <Typewriter
      options={{
        strings: ["PROJECTS AND WORKS"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export function TypeAbout() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hey There..",
          " Vikash this side.",
          "I am a full stack developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
