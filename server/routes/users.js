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
router.get("/getUser", getUser);
router.get("/getUsers", getUsers);
router.post("/createUser", createUser);
router.patch("/modifyUser", ModifyUser);
router.delete("/deleteUser", deleteUser);

// // article routes
// router.get("/user", getUser);
// router.get("/user", getUsers);
// router.post("/user", ModifyUser);
// router.patch("/user", createUser);
// router.delete("/user", deleteUser);

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
