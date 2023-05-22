import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Categorie = ({ nom, onClick }) => (
  <div
    style={{
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
      padding: "4px 8px",
      cursor: "pointer",
    }}
    onClick={() => onClick(nom)}
    onMouseEnter={(event) => {
      event.target.style.backgroundColor = "#c0c0c0";
    }}
    onMouseLeave={(event) => {
      event.target.style.backgroundColor = "#e0e0e0";
    }}
  >
    <Typography variant="subtitle2" color="text.primary">
      {nom}
    </Typography>
  </div>
);

const CategoriesCard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categorie") // Replace with your API endpoint
      .then((response) => response.json())
      .then((responseData) => {
        setCategories(responseData);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    console.log("Clicked category:", category);

  };

  return (
    <Card
          sx={{
        maxWidth: 345,
        height: "300px",
        borderRadius: "5",
        margin: "100px 3px 0 0 ",
        position: "sticky",
        top: "10px", // Adjust the desired top position
        right: "0px", // Adjust the desired right position
        zIndex: 9999, // Ensure a high z-index value
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "calc(0.475rem + 2.7vw)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "black",
          }}
        >
          Categories
        </Typography>
        <Grid container spacing={1}>
          {categories.map((category) => (
            <Grid item key={category.id}>
              <Categorie
                nom={category.nom}
                onClick={() => handleCategoryClick()}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
