var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("home page");
});
router.post("/", function (req, res, next) {
  res.json({ header: req.headers });
});

module.exports = router;
