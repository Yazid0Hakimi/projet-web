const express = require("express");
const {
  getUsers,
  getUser,
  ModifyUser,
  deleteUser,
  createUser,
} = require("../controller/users");

const router = express.Router();

// user routes
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", ModifyUser);
router.delete("/:id", deleteUser);

// // categories routes
// router.get("/user", getUser);
// router.get("/user", getUsers);
// router.post("/user", ModifyUser);
// router.patch("/user", createUser);
// router.delete("/user", deleteUser);

// // commentaires routes
// router.get("/user", getUser);
// router.get("/user", getUsers);
// router.post("/user", ModifyUser);
// router.patch("/user", createUser);
// router.delete("/user", deleteUser);

module.exports = router;
