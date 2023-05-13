import { useState } from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../redux/apiCalls"
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';

const Container = styled.div`
    width: 100xw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://i1.wp.com/goinggrayblog.com/wp-content/uploads/2010/10/clothes.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background: #fdfcfc;
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
    flex-direction: column;
    
`

const Input = styled.input`
    margin: 20px 10px 0px 10px;
    padding: 10px;
    min-width: 50%;
`

const Button = styled.button`
    display: flex;
    padding: 10px 30px;
    margin: 20px 0px;
    font-size: 15px;
    cursor: pointer;
    
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
  color: red;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
    <Announcement />
        <Navbar />
        <Container>
      
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
    </>
    
  )
}

export default Login;