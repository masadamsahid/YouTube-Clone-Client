import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("videos/random/");
      console.log(res);
      setVideos(res.data);
    }
    fetchVideos();
  }, []);
  return (
    <Container>
        {videos.map(video => (
          <Card key={video._id}/>
        ))}
    </Container>
  );
};

export default HomePage;