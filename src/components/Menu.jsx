import React from 'react';
import styled from "styled-components";
import {
  Home,
  SportsBasketballOutlined,
  VideoLibraryOutlined,
  SubscriptionsOutlined,
  ExploreOutlined,
  LibraryMusicOutlined,
  HistoryOutlined,
  MovieOutlined,
  NewspaperOutlined,
  LiveTvOutlined,
  SettingsOutlined,
  ReportOutlined,
  HelpOutline,
  SportsEsportsOutlined,
  SettingsBrightnessOutlined,
  AccountCircleOutlined,
} from '@mui/icons-material'

import LogoImg from '../img/logo.png';
import {Link} from "react-router-dom";

const Container = styled.div`
  flex: 1.5;
  background-color: ${({theme}) => theme.bgLighter};
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 12px;
  position: sticky;
  top: 0;
  overflow-y: auto;
  &::-webkit-scrollbar{
    width: 6px;
  }
  &::-webkit-scrollbar-track{
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb{
    background-color: ${({theme}) => theme.scrollbarColor};
    border-radius: 4px;
  }
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

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;
  font-size: 12px;
`

const Img = styled.img`
  height: 25px;
`

const Hr = styled.hr`
  margin: 15px 0;
  border: .5px solid ${({theme}) => theme.soft};
`

const Login = styled.div`
  
`

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`

const Menu = ({darkMode, setDarkMode}) => {
  return (
    <Container>
      <Wrapper>
        <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
          <Logo>
            <Img src={LogoImg}/>
            MasadamTube
          </Logo>
        </Link>
        <Item>
          <Home fontSize='small'/>
          Home
        </Item>
        <Item>
          <ExploreOutlined fontSize='small'/>
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlined fontSize='small'/>
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryOutlined fontSize='small'/>
          Library
        </Item>
        <Item>
          <HistoryOutlined fontSize='small'/>
          History
        </Item>
        <Hr/>
        <Login>
          Sign in to like videos, comment, and subscribe.
        </Login>
        <Button>
          <AccountCircleOutlined fontSize='small'/>
          SIGN IN
        </Button>
        <Hr/>
        <Title>BEST OF MASADAMTUBE</Title>
        <Item>
          <LibraryMusicOutlined fontSize='small'/>
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined fontSize='small'/>
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined fontSize='small'/>
          Gaming
        </Item>
        <Item>
          <MovieOutlined fontSize='small'/>
          Movies
        </Item>
        <Item>
          <NewspaperOutlined fontSize='small'/>
          News
        </Item>
        <Item>
          <LiveTvOutlined fontSize='small'/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlined fontSize='small'/>
          Settings
        </Item>
        <Item>
          <ReportOutlined fontSize='small'/>
          Report
        </Item>
        <Item>
          <HelpOutline fontSize='small'/>
          Help
        </Item>
        <Item onClick={()=>setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined fontSize='small'/>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;