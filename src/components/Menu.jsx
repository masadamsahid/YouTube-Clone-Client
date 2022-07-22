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
  SportsEsportsOutlined, SettingsBrightnessOutlined, AccountCircleOutlined,
} from '@mui/icons-material'

import LogoImg from '../img/logo.png';

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 12px;
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
  border: .5px solid #373737;
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

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImg}/>
          MasadamTube
        </Logo>
        <Item>
          <Home/>
          Home
        </Item>
        <Item>
          <ExploreOutlined/>
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlined/>
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryOutlined/>
          Library
        </Item>
        <Item>
          <HistoryOutlined/>
          History
        </Item>
        <Hr/>
        <Login>
          Sign in to like videos, comment, and subscribe.
        </Login>
        <Button>
          <AccountCircleOutlined/>
          SIGN IN
        </Button>
        <Hr/>
        <Item>
          <LibraryMusicOutlined/>
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined/>
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined/>
          Gaming
        </Item>
        <Item>
          <MovieOutlined/>
          Movies
        </Item>
        <Item>
          <NewspaperOutlined/>
          News
        </Item>
        <Item>
          <LiveTvOutlined/>
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlined/>
          Settings
        </Item>
        <Item>
          <ReportOutlined/>
          Report
        </Item>
        <Item>
          <HelpOutline/>
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlined/>
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;