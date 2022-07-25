import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {PlaylistAdd, Share, ThumbDownOutlined, ThumbUpOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import Comments from "../components/Comments";
import Card from "../components/Card";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";
import {fetchFailure, fetchStart, fetchSuccess} from "../redux/videoSlice";
import {format} from "timeago.js";

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
  const dispatch = useDispatch();
  const {currentUser} = useSelector(store => store.user);
  const {currentVideo} = useSelector(store => store.video);
  
  const {id} = useParams();
  
  const [channel,setChannel] = useState({});
  
  useEffect(()=>{
    const fetchData = async () => {
      fetchStart();
      try {
        const videoRes = await axios.get(`/videos/find/${id}`);
        
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
        
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      }catch (err) {fetchFailure();console.log(err);}
    }
    fetchData();
  },[id,dispatch])
  
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
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>{currentVideo?.views} views • {format(currentVideo?.createdAt)}</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined fontSize='small'/> {currentVideo?.likes?.length}
            </Button>
            <Button>
              <ThumbDownOutlined fontSize='small'/> {currentVideo?.dislikes?.length}
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
            <Image src={channel?.img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}/>
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel?.subscribers?.length || '0'} subscribers</ChannelCounter>
              <Description>
                {currentVideo?.desc || '[NO DESC]'}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        {/*<Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>*/}
      </Recommendation>
    </Container>
  );
};

export default WatchVideoPage;