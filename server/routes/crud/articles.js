const express = require("express");
const {
  getArticles,
  getArticle,
  createArticle,
  ModifyArticle,
  deleteArticle
} = require("../../controller/articles");

const router = express.Router();

// article routes

router.get("/:id", getArticle);
router.get("/", getArticles);
router.post("/", createArticle);
router.patch("/:id", ModifyArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
