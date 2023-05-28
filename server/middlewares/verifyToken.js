const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  if (!req.cookies.accessToken) {
    return res.status(401).send("Unauthorized no token");
  }
  const token = req.cookies.accessToken;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
     (err, payload) => {
    if (err) {
      req.user = { payload, autorization: "unauthorized" };
      console.log(req.user);
      next();
    }
    req.user = payload;
    console.log(req.user);
    next();
  });
};

module.exports = verifyAccessToken;
