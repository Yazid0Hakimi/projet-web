const express = require("express");
const login = require( "../../controller/auth.js")

const router = express.Router();

router.post("/" , login);

module.exports  = router;