import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {useDispatch} from "react-redux";
import {signInWithPopup} from 'firebase/auth';

import {loginFailure, loginStart, loginSuccess} from "../redux/userSlice";
import {auth, provider} from "../firebase";

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
  background-color: ${({theme}) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({theme}) => theme.soft};
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
  border: 1px solid ${({theme}) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  outline: none;
  width: 100%;
  color: ${({theme}) => theme.text};

  &:focus {
    outline: 1px solid #3392ff;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
  margin-top: 10px;
`;

const Links = styled.div`
  margin-left: 40px;
`;

const Link = styled.span`
  margin-left: 25px;
`;

const SignInPage = () => {
  
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", {name, password});
      dispatch(loginSuccess(res.data));
    }catch (err) {
      dispatch(loginFailure());
    }
  }
  
  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth,provider)
      .then(async (result) => {
        console.log(result);
        await axios.post('auth/google', {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL
        }).then((res) => {
          dispatch(loginSuccess(res.data));
        });
      })
      .catch((err) => {
        dispatch(loginFailure());
      });
    
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to MasadamTube</SubTitle>
        <Input placeholder='username' onChange={(e) => setName(e.target.value)}/>
        <Input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>
          Sign in
        </Button>
        <Title>or</Title>
        <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        <Title>or</Title>
        <SubTitle>to continue to MasadamTube</SubTitle>
        <Input placeholder='username' onChange={(e) => setName(e.target.value)}/>
        <Input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <Input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
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