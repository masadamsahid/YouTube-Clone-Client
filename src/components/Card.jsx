import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {format} from "timeago.js";
import axios from "axios";

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

const Card = ({type, video}) => {
  
  const [channel, setChannel] = useState({});
  
  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`/user/find/${video.userId}`);
      console.log(res);
      setChannel(res.data);
    }
    fetchChannel();
  }, [video.userId]);
  
  return (
    <Link to={`/video/test`} style={{textDecoration: 'none'}}>
      <Container type={type}>
        <Image
          type={type}
          src={video.imgUrl}
        />
        <Details type={type}>
          <ChannelImg
            type={type}
            src={channel.img}
          />
          <Texts type={type}>
            <Title type={type}>{video.title}</Title>
            <ChannelName type={type}>{channel.name}</ChannelName>
            <Info type={type}>{video.views} views • {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;