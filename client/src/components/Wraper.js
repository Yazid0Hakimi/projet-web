import React from "react";
import SideBar from "./SideBar";
import Posts from "../pages/Index";
import Box from "@mui/material/Box";
import PostContainer from "./PostContainer";

const Content = () => {
  return (
    <>
      <Box
        sx={{
          Width: "100vw",
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin: 0,
          padding: 0,
        }}
      >
        <PostContainer />

        <SideBar />
      </Box>
    </>
  );
};

export default Content;
