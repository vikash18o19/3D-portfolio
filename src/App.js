import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";


const Container = styled.div`
  height: 100vh;
  width: 100hw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto; // adds an scroll bar when exceeds vertical screen.
  background: url("./images/bg2.jpg");
  background-size: 100%;
  
  &::-webkit-scrollbar{
    display: none;
  }
  background-repeat: no-repeat;
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
