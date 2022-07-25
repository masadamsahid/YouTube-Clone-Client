import React, {useState} from 'react';
import styled, {useTheme} from "styled-components";
import {
  AccountBox,
  AccountCircleOutlined,
  Logout,
  SearchOutlined,
  Settings,
  VideoCallOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {darkTheme} from "../utils/Theme";
import {Divider, Menu, MenuItem} from "@mui/material";
import {logout} from "../redux/userSlice";


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

const Navbar = (props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  
  const {currentUser} = useSelector((store) => store.user);
  console.log("the currentUser:",currentUser?.img)
  
  const [profileMenuAnchor,setProfileMenuAnchor] = useState(null);
  const open = Boolean(profileMenuAnchor);
  
  console.log(profileMenuAnchor);
  
  const handleClick = (e) => {
    setProfileMenuAnchor(e.currentTarget);
  }
  
  const handleClose = () => {
    setProfileMenuAnchor(null);
  }
  
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
            <Avatar
              src={currentUser.img ? currentUser.img : ""}
              onClick={handleClick}
            />
            {currentUser.name}
            <Menu
              open={open}
              anchorEl={profileMenuAnchor}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  backgroundColor: theme.bg,
                  color: theme.text,
                }
              }}
            >
              <MenuItem>
                <AccountBox fontSize='small'/>
                &nbsp;
                Profile
              </MenuItem>
              <Divider color={theme.soft}/>
              <MenuItem>
                <Settings fontSize='small'/>
                &nbsp;
                Settings
              </MenuItem>
              <MenuItem onClick={()=> {
                dispatch(logout());
                handleClose();
              }}>
                <Logout fontSize='small' sx={{transform: 'scaleX(-1)'}}/>
                &nbsp;
                Logout
              </MenuItem>
            </Menu>
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