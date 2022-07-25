import React from 'react';
import styled from "styled-components";
import {AccountCircleOutlined, SearchOutlined, VideoCallOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {darkTheme} from "../utils/Theme";


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
  color: ${({theme}) => theme.text};
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

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  
  const {currentUser} = useSelector((store) => store.user);
  console.log(currentUser)
  
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlined/>
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlined/>
            <Avatar/>
            {currentUser.name}
          </User>
        ) : (
          <Link to='/signin' style={{textDecoration: 'none'}}>
            <Button>
              <AccountCircleOutlined fontSize='small'/>
              SIGN IN
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;