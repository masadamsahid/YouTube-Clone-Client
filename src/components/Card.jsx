import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: ${(props)=> props.type !== 'small' && '240px'};
  margin-bottom: ${(props)=> props.type === 'small' ? '5px' : '25px'};
  cursor: pointer;
  display: ${(props)=> props.type === 'small' && 'flex'};
  gap: ${(props)=> props.type === 'small' ? '10px' : '5px'};
`

const Image = styled.img`
  width: 100%;
  height: ${(props)=> props.type === 'small' ? '90px' : '124px'};
  background-color: #999;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props)=> props.type !== 'small' && '12px'};
  gap: 10px;
  flex: 1;
`

const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=> props.type === 'small' && 'none'}
`

const Texts = styled.div``;

const Title = styled.h1`
  font-size: ${(props)=> props.type === 'small' ? '12px' : '14px'};
  font-weight: 700;
  color: ${({theme}) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: ${(props)=> props.type === 'small' ? '12px' : '14px'};
  color: ${({theme}) => theme.textSoft};
  font-weight: 400;
  margin: 5px 0;
`;

const Info = styled.div`
  font-size: ${(props)=> props.type === 'small' ? '11px' : '12px'};
  color: ${({theme}) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to={`/video/test`} style={{textDecoration: 'none'}}>
      <Container type={type}>
        <Image type={type} src='https://www.adobe.com/express/create/thumbnail/media_1dbde0324d7a246981b97c7efc38d56176d359e3f.jpeg?width=400&format=jpeg&optimize=medium'/>
        <Details type={type}>
          <ChannelImg type={type} src='https://yt3.ggpht.com/yti/APfAmoF4kXb--RJtyQ1ePoOSZoDIm0OAt1WJy2lyfDkqKQ=s88-c-k-c0x00ffffff-no-rj-mo' />
          <Texts type={type}>
            <Title type={type}>Test Video</Title>
            <ChannelName type={type}>Adam Gamtenk</ChannelName>
            <Info type={type}>781,901 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;