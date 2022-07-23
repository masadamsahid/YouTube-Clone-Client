import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 84px);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme})=> theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({theme})=> theme.soft};
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({theme})=> theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({theme})=> theme.soft};
  color: ${({theme})=> theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({theme})=> theme.textSoft};
  margin-top: 10px;
`;

const Links = styled.div`
  margin-left: 40px;
`;

const Link = styled.span`
  margin-left: 25px;
`;

const SignInPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to MasadamTube</SubTitle>
        <Input placeholder='username'/>
        <Input type='password' placeholder='password'/>
        <Button>
          Sign in
        </Button>
        <Title>or</Title>
        <SubTitle>to continue to MasadamTube</SubTitle>
        <Input placeholder='username'/>
        <Input type='email' placeholder='email'/>
        <Input type='password' placeholder='password'/>
        <Button>
          Sign up
        </Button>
      </Wrapper>
      <More>
        English(US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignInPage;