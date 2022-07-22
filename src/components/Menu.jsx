import React from 'react';
import styled from "styled-components";

import LogoImg from '../img/logo.png';

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 14px;
`;

const Img = styled.img`
  height: 25px;
`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImg}/>
          MasadamTube
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;