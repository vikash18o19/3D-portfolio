import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import React,{useRef} from "react";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto; // adds a scroll bar when exceeding the vertical screen.
  background: url("./images/bg2.jpg");
  background-size: cover;
  background-position: center;

  &::-webkit-scrollbar {
    display: none;
  }
  background-repeat: no-repeat;

  @media only screen and (max-width: 10px) {
    background-size: contain;
  }
`;

function App() {

  const containerRef = useRef(null);

  const scrollToThirdSnap = () => {
    const container = containerRef.current;
    const snapElements = container.getElementsByClassName('snap-element');
    const thirdSnap = snapElements[2];

    thirdSnap.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container>
      <Hero func = {scrollToThirdSnap}/>
      <Who />
      <Works ref={containerRef} />
      <Contact />
    </Container>
  );
}

export default App;
