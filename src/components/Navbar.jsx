import React from 'react';
import styled from "styled-components";
import {AccountCircleOutlined, SearchOutlined} from "@mui/icons-material";


const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  opacity: .8;
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
`
const Search = styled.div`
  width: 40%;
  margin-right: 25%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({theme}) => theme.soft};
  border-radius: 3px;
`

const Input = styled.input`
  flex: auto;
  border: none;
  background-color: transparent;
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlined/>
        </Search>
        <Button>
          <AccountCircleOutlined fontSize='small'/>
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;