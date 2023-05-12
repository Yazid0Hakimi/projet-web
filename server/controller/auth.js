// import jwt from "jsonwebtoken";
// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(req.user);
//     // find the user by email
//     const UserData = await prisma.Utilisateur.findUnique({
//       where: {
//         email: email,
//       },
//     });
//     // no user found
//     if (!UserData) {
//       res.status(401).json({ error: "Invalid email or password" });
//     }
//     // check if password matches
//     // note that the order in password and hashedPassword are important !!
//     const isMatched = await bcrypt.compare(password, UserData.password);
//     // incorrect password
//     if (!isMatched)
//       res.status(401).json({ error: "Invalid email or password" });
//     // correct password
//     else {
//       delete UserData.password;
//       const token = jwt.sign({ id: user._id }, process.env.SECRET_TOKEN);
//       res.status(200).json({ UserData, token });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send({ error: err.message });
//   }
// };
