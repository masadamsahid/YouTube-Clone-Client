import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Comment from "./Comment";
import axios from "axios";
import {useSelector} from "react-redux";

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


const Comments = ({videoId}) => {
  const {currentUser} = useSelector((store) => store.user)
  
  const [comments, setComments] = useState([]);
  
  useEffect(()=>{
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      }catch (err) {}
    }
    fetchComments();
  },[videoId])
  
  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img}/>
        <Input placeholder='Add a comment here ...'/>
      </NewComment>
      {comments.map((comment) => <Comment key={comment._id} comment={comment}/>)}
    </Container>
  );
};

export default Comments;