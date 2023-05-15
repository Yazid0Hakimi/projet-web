const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  console.log("verification");
console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized no token");
  }

  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }

    req.user = payload;
    console.log("token");
    next();
  });
};

module.exports = verifyAccessToken;
