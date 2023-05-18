import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

const SideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    axios
      .get("http://localhost:5000/categorie")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

   const handleCategoryClick = (category) => {
     console.log(category);
   };
  return (
    <Box display="flex" flex={2} sx={{ backgroundColor:"blue" }}>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          width: "100%",
          margin: "10px 0 0 0",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {/* {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category)}
          >
            {category.nom}
          </li>
        ))} */}
      </ul>
    </Box>
  );
};

export default SideBar;
