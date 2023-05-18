import React, { useState, useEffect } from "react";
// import Blog from "../components/Blog";
import Grid from "@mui/material/Grid" 
const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // Fetch posts from API
    fetch("http://localhost:5000/article?&take=10&skip=1") // Replace with your API endpoint
      .then((response) => response.json())
      .then((responseData) => {
        setPosts(responseData);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
    Posts
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
            {/* <Blog data={post} /> */}

            gg
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Posts;
