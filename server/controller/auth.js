const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
require("dotenv").config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // find the user by email
    const UserData = await prisma.Utilisateur.findUnique({
      where: {
        email: email,
      },
    });
    // no user found
    if (!UserData) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }
    // check if password matches
    // note that the order in password and hashedPassword are important !!
    const isMatched = await bcrypt.compare(password, UserData.hashedPassword);
    // incorrect password
    if (!isMatched) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    } // correct password
    else {
      delete UserData.password;
      const token = jwt.sign(
        { id: UserData._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 3600000,
      });
      res.status(200).json({ user: UserData });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message + "her" });
  }
};

module.exports = login;
