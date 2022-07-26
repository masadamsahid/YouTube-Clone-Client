import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {format} from "timeago.js";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 12px;
`;

const Comment = ({comment}) => {
  const [channel, setChannel] = useState({});
  
  useEffect(()=>{
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    }
    fetchChannel();
  },[comment.userId])
  
  return (
    <Container>
      <Avatar src={channel.img}/>
      <Details>
        <Name>{channel.name}<Date>{format(channel.createdAt)}</Date></Name>
        <Text>
          {comment.desc}
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;