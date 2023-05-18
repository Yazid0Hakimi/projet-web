import React from "react";
import Box from "@mui/material/Box";
import { Typography, Stack } from "@mui/material";

import Posts from "./Posts";

const PostContainer = () => {
  return (
    <>
      <Box display="flex" flex={6} flexDirection="column">
        <Typography
          sx={{
            marginTop:"10px",
            marginLeft:"15px",
            fontSize: "calc(0.475rem + 2.7vw)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "black",
          }}
        >
          Articles
        </Typography>

        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Posts />
        </Stack>
      </Box>
    </>
  );
};

export default PostContainer;
