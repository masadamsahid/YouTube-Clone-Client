import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  margin-bottom: 45px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 124px;
  background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
  font-weight: 400;
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
      <Image src='https://www.adobe.com/express/create/thumbnail/media_1dbde0324d7a246981b97c7efc38d56176d359e3f.jpeg?width=400&format=jpeg&optimize=medium'/>
      <Details>
        <ChannelImg src='https://yt3.ggpht.com/yti/APfAmoF4kXb--RJtyQ1ePoOSZoDIm0OAt1WJy2lyfDkqKQ=s88-c-k-c0x00ffffff-no-rj-mo' />
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Adam Gamtenk</ChannelName>
          <Info>781,901 views • 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
};

export default Card;