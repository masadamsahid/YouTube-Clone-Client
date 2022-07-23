import React from 'react';
import styled from "styled-components";
import {PlaylistAdd, Share, ThumbDownOutlined, ThumbUpOutlined} from "@mui/icons-material";
import Comments from "../components/Comments";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  color: ${({theme}) => theme.textSoft};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  color: inherit;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: .5px solid ${({theme}) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 12px;
`;

const Subscribe = styled.button`
  color: white;
  background-color: red;
  border: none;
  border-radius: 2px;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
`;

const WatchVideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/wr_k36Zmo5g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>781,901 views • 25 Jul 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined fontSize='small'/> Like
            </Button>
            <Button>
              <ThumbDownOutlined fontSize='small'/> Disike
            </Button>
            <Button>
              <Share fontSize='small'/> Share
            </Button>
            <Button>
              <PlaylistAdd fontSize='small'/> Save
            </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src='https://yt3.ggpht.com/yti/APfAmoF4kXb--RJtyQ1ePoOSZoDIm0OAt1WJy2lyfDkqKQ=s88-c-k-c0x00ffffff-no-rj-mo'/>
            <ChannelDetail>
              <ChannelName>Adam Gamtenk</ChannelName>
              <ChannelCounter>122K subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolor error expedita illo ipsa
                laudantium magni molestiae, neque nobis praesentium quam voluptatibus!
                A aliquam aliquid amet dicta distinctio dolorem facere incidunt nihil non,
                officiis quaerat saepe sint, tempora tempore vero?
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>recommendation</Recommendation>
    </Container>
  );
};

export default WatchVideoPage;