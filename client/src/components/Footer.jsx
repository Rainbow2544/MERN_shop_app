import React from 'react';
import styled from 'styled-components';
import {
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";
  import { mobile,tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column" })}
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;
    ${mobile({ flexDirection:"column" })}
`

const Logo = styled.h1``;

const Desc = styled.p`
    margin-top: 20px; 
`;

const SocialContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const SocialIcon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${(props) => props.color};
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    & :hover {
        cursor: pointer;
    }
`;



const Center = styled.div`
    
    padding: 20px;
    flex-direction: column;
    flex: 1;
`
const Title = styled.h3`
    margin-bottom: 30px;
    
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    list-style: none;
    margin-bottom: 10px;
    padding:5px;
    width: 50%;
    & :hover {
        cursor: pointer;
    }
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    flex-direction: column;
`

const ContactItem  = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`

const Payment  = styled.img`
    display: flex;
    width:55%;
    margin-top: 20px;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>SARA.</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999"> <Facebook /> </SocialIcon>
                <SocialIcon color="E4405F"> <Instagram /> </SocialIcon>
                <SocialIcon color="55ACEE"> <Twitter /> </SocialIcon>
                <SocialIcon color="E60023"> <Pinterest /> </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 abc Path, South abc  1234
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> contact@rainbow
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>

    </Container>
  )
}

export default Footer;