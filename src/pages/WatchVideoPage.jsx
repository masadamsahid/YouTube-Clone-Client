import React from 'react';
import styled from "styled-components";
import {PlaylistAdd, Share, ThumbDownOutlined, ThumbUpOutlined} from "@mui/icons-material";

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
              <ThumbUpOutlined/> Like
            </Button>
            <Button>
              <ThumbDownOutlined/> Disike
            </Button>
            <Button>
              <Share/> Share
            </Button>
            <Button>
              <PlaylistAdd/> Save
            </Button>
          </Buttons>
        </Details>
        <Hr/>
      </Content>
      <Recommendation>recommendation</Recommendation>
    </Container>
  );
};

export default WatchVideoPage;