const express = require("express");
const {
  getCommentaires,
  getCommentaire,
  createCommentaire,
  modifyCommentaire,
  deleteCommentaire,
} = require("../controller/commentaires");

const router = express.Router();

// Commentaire routes
router.get("/", getCommentaires);
router.get("/:id", getCommentaire);
router.post("/", createCommentaire);
router.patch("/:id", modifyCommentaire);
router.delete("/:id", deleteCommentaire);

module.exports = router;
