import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import Stack  from "@mui/material/Stack";



export default function Compo(data) {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ maxWidth: 745 }}>
      <Stack flexDirection="row">
        <CardMedia
          component="img"
          image={data.data.image}
          alt="Card image"
          sx={{ width: "40%" }}
        />
        <Stack sx={{ width: "60%" }} spacing={2}>
          <CardContent>
            <Stack
              flexDirection="column"
              justifyContent="space-between"
              spacing={2}
            >
              <Typography variant="subtitle1" color="text.secondary">
                {data.data.categorie}
              </Typography>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2" color="text.primary">
                  Posted by: {data.data.username}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {data.data.createdAt}
                </Typography>
              </Stack>
              <Typography variant="h5" color="text.primary">
                {data.data.titre}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {data.data.contenu}
              </Typography>
            </Stack>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add Comment">
              <CommentIcon />
              {5}
            </IconButton>
          </CardActions>
            
        </Stack>
      </Stack>
    </Card>
  );
}
