import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: space-between;
`
const Container = styled.div`
    width: 1200px;
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;

`
const Logo = styled.img`
    size: 10%;
    height: 60px;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

`
const Icon = styled.img`
    width: 30px;
    cursor: pointer;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const ListItem = styled.li`
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;

`
const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    cursor: pointer;

`


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./images/logo.png" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./images/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar

