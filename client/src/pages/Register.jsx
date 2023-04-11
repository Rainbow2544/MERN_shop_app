import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "75%" })}
`

const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`

const Form = styled.form`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    margin: 20px 10px 0px 10px;
    min-width: 50%;
    padding: 10px;
`

const Agreement = styled.span`
    margin: 20px 0px;
    font-size: 12px;
`

const Button = styled.button`
    padding: 10px 30px;
    font-size: 15px;
    cursor: pointer;
`

function Register() {
  return (
    <Container >
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;