import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState();
  const params = useParams();

  useEffect(() => {
  const { userId } = params;

    const fetchPosts = async () => {
      try {
        let url;
        if (userId) {
          url = `http://localhost:5000/article/user/${userId}/?&take=10&skip=0`;
        } else {
          url = "http://localhost:5000/article/data?&take=10&skip=0";
        }

        const response = await fetch(url);
        const responseData = await response.json();
        setPosts(responseData);
        console.log(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid
        container
        sx={{ marginLeft: "80px", marginTop: "20px" }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        spacing={2} // Adjust the spacing value to add vertical spacing between elements
      >
        {posts.map((post) => (
          <Grid item key={post.id} lg={12}>
            <Post data={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
