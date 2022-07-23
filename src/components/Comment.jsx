import React from 'react';
import styled from "styled-components";

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

const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://yt3.ggpht.com/yti/APfAmoF4kXb--RJtyQ1ePoOSZoDIm0OAt1WJy2lyfDkqKQ=s88-c-k-c0x00ffffff-no-rj-mo'/>
      <Details>
        <Name>Adam Gamtenk <Date>1 day ago</Date></Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          A amet at aut molestias nisi officiis praesentium,
          rerum vel! Magnam, necessitatibus?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;