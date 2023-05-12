const express = require("express");
const {
  getCategories,
  getCategorie,
  createCategorie,
  modifyCategorie,
  deleteCategorie,
} = require("../../controller/categories");

const router = express.Router();

// Categorie routes
router.get("/", getCategories);
router.get("/:id", getCategorie);
router.post("/", createCategorie);
router.patch("/:id", modifyCategorie);
router.delete("/:id", deleteCategorie);

module.exports = router;
