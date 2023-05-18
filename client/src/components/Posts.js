import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Grid from "@mui/material/Grid";
const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    // Fetch posts from API
    fetch("http://localhost:5000/article?&take=10&skip=1") // Replace with your API endpoint
      .then((response) => response.json())
      .then((responseData) => {
        setPosts(responseData);
        // console.log(posts);
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
