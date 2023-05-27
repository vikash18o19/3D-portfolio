import React from 'react'
import styled from 'styled-components'



const Section = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  height: 60vh;
  width: 80vw;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`
const Card = styled.div`
  position: relative;
  margin: 20px;
  border-radius: 20px;
  width: 12vw;
  height: 12vw;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    background-color: rgba(255, 255, 255, 0.7);
    width: 12.1vw;
    height: 12.1vw;
  }
`;

const CardImg = styled.img`
  height: 10vw;
  width: 10vw;
`

const Contact = () => {
    return (
        <Section>
          <Main>
            <Card onClick={() => window.location.href = 'https://github.com/vikash18o19'}><CardImg src='./images/github.png'/></Card>
            <Card><CardImg src='./images/instagram.png'/></Card>
            <Card><CardImg src='./images/linkedin.png'/></Card>
          </Main>
        </Section>
    )
}

export default Contact