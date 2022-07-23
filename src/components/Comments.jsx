import React from 'react';
import styled from 'styled-components';
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  outline: none;
  color: ${({theme}) => theme.text};
  padding: 5px;
  width: 100%;
`;


const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://yt3.ggpht.com/yti/APfAmoF4kXb--RJtyQ1ePoOSZoDIm0OAt1WJy2lyfDkqKQ=s88-c-k-c0x00ffffff-no-rj-mo'/>
        <Input placeholder='Add a comment here ...'/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  );
};

export default Comments;