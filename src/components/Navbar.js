import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Section = styled.div`
    width: 90svw;
    margin: 2em auto;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 80%;
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Logo = styled.img`
    size: 10%;
    width:10em;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
`
const List = styled.ul`
    display: flex;
    gap: 10%;
    list-style: none;

`
const Icon = styled.img`
    width: 20%;
    cursor: pointer;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 15%;
`
const ListItem = styled.li`
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
    :hover{
        color: darkblue;

    }
`
const Button = styled.button`
    width: 10svw;
    height: 6svh;
    font-size: 1em;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;
    :hover{
        background-color: white;
        color: black;
    }

`


const Navbar = () => {

    const handleClick = () => {
        console.log("works clicked")
    };

    return (
        <motion.div
        initial={{opacity:0, y:-180}}
        animate={{opacity:1, y:0}}
        transition={{
            ease:'easeInOut',
            duration:1,
            delay:0.6,


        }}>
        <Section>
            <Container>
                <Links>
                    <Logo src="./images/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem onClick={handleClick}>
                            Contact
                        </ListItem>
                    </List>
                </Links>
                <Icons>
                    {/* <Icon src="./images/search.png" /> */}
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
        </motion.div>
    );
};

export default Navbar;

