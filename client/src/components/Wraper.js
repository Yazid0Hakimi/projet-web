  import React from "react";
  import NarBar from "./NarBar";
  import Posts from "../pages/Index";
  import Box from "@mui/material/Box";

  const Content = () => {
    return (
      <>
        <Box
          sx={{
            // Width: "100vw",
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: 0,
            padding: 0,
          }}
        >
          <NarBar />

        </Box>
      </>
    );
  };

  export default Content;
