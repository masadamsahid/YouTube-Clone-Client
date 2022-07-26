import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Comment from "./Comment";
import axios from "axios";
import {useSelector} from "react-redux";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  flex: 1;
  align-items: end;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  outline: none;
  color: ${({theme}) => theme.text};
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  transition: all .2s ease-in-out;
  
  &:hover{
    background-color: #3ea6ff;
    color: black;
  }
  
  &:disabled{
    background-color: ${({theme}) => theme.bgLighter};
    color: ${({theme}) => theme.textSoft};
    border: none;
  }
`;


const Comments = ({videoId}) => {
  const {currentUser} = useSelector((store) => store.user)
  
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  
  useEffect(()=>{
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      }catch (err) {}
    }
    fetchComments();
  },[videoId])
  
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    alert('aaa')
    await axios.post(`/comments/`,{
      "desc": newComment,
      "videoId": videoId
    });
  }
  
  return (
    <Container>
      <NewComment onSubmit={handleSubmitComment}>
        <Avatar src={currentUser?.img}/>
        <FormContainer>
          <Input
            placeholder='Add a comment here ...'
            onChange={(e)=>setNewComment(e.target.value)}
            value={newComment}
          />
          <Button type='submit' disabled={newComment.length < 1}>
            COMMENT
          </Button>
        </FormContainer>
      </NewComment>
      {comments.map((comment) => <Comment key={comment._id} comment={comment}/>)}
    </Container>
  );
};

export default Comments;