const express = require("express");
const {
  getArticles,
  getArticle,
  createArticle,
  ModifyArticle,
  deleteArticle,
  __Articles_data,
  __UserArticles,
} = require("../../controller/articles");
const verifyAccessToken = require ( "../../middlewares/verifyToken");
const router = express.Router();

// article routes

router.get("/data", __Articles_data);
router.get("/", getArticles);
router.get("/user/:id", __UserArticles);
// router.get("/user/:id", verifyAccessToken,__UserArticles);
router.post("/", createArticle);
router.get("/:id", getArticle);
router.patch("/:id", ModifyArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
