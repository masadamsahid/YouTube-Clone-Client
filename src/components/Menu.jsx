import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>items</Wrapper>
    </Container>
  );
};

export default Menu;