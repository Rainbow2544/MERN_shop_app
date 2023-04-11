import React from 'react';
import styled from 'styled-components';
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    height: 60vh;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    display: flex;
    margin: 20px;
    width: 50%;
    height: 40px;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    padding-left: 20px;
    border: none;
    flex: 5;
    height: 30px;
`

const Button = styled.button`
    flex: 1;
    height: 35px;
    border: none;
    background-color: teal;
    color: white;
`

function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Enter your email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter;