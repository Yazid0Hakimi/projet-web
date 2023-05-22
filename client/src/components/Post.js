import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CommentIcon from "@mui/icons-material/Comment";
import Stack from "@mui/material/Stack";

const Categorie = ({ nom, onClick }) => (
  <div
    style={{
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
      padding: "4px 8px",
      display: "inline-block",
      marginRight: "8px",
      cursor: "pointer",
    }}
    onClick={() => onClick(nom)}
  >
    <Typography variant="subtitle2" color="text.primary">
      {nom}
    </Typography>
  </div>
);

export default function Compo({ data }) {
  if (!data) {
    return <div>Lwoading...</div>;
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const handleCategoryClick = (category) => {
    console.log("Clicked category:", category);
  };

  return (
    <Card sx={{ maxWidth: 945 }}>
      <Stack flexDirection="row">
        <CardMedia
          component="img"
          image={data.image}
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
              <Stack
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                {data.categories.map((category) => (
                  <Categorie
                    key={category.nom}
                    nom={category.nom}
                    onClick={handleCategoryClick}
                  />
                ))}
              </Stack>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2" color="text.primary">
                  Posted by: {data.utilisateur?.nom}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {formatDate(data.createdAt)}
                </Typography>
              </Stack>
              <Typography variant="h5" color="text.primary">
                {data.titre}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {data.contenu}
              </Typography>
            </Stack>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add Comment">
              <CommentIcon sx={{ color: "black" }} />
              {data.commentaires?.length}
            </IconButton>
          </CardActions>
        </Stack>
      </Stack>
    </Card>
  );
}
