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
            fontSize: "calc(1.475rem + 2.7vw)",
            fontWeight: 300,
            lineHeight: 1.2,
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
