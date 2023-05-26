import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left:20vw;
  padding-right: 5vw;
  /* scroll-snap-align: center; */
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
    padding: 5vh 8vw;
    flex: 2;
    display: flex;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 20px;

`
const Title = styled.h1`
font-size: 74px;
color: white;
`

const Line = styled.img`
    width:20px;
`
const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
`
const Subtitle = styled.h2`
    font-size: 35px;
    color: white;
`
const Desc = styled.p`
    color: white;
    font-size: 25px;
`
const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 30px;
`


const Right = styled.div`
display: flex;
padding: 5vh 8vw;
align-items: center;
justify-content: center;
flex: 3;
`
const Img = styled.img`
    height: 400px;
    width: 600px;
    object-fit: contain;
    animation: animate 3s infinite ease alternate;

    @keyframes animate {
        100%{
            transform: translateY(20px);
        }
    }
`






const Hero = () => {


    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Welcome...</Title>
                    <WhatWeDo>
                        {/* <Line src="./images/white_line.png" /> */}
                        <Subtitle> -- What I do..</Subtitle>
                    </WhatWeDo>
                    <Desc>I enjoy creating apps having great visuals and involving AI.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Img src="./images/astronaut.png" />
                </Right>
            </Container>
        </Section >
    )
}

export default Hero