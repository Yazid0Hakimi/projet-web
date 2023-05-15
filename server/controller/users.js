const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

/* Prisma functions */

async function P_getUsers(res) {
  const allUsers = await prisma.Utilisateur.findMany();
  res.send(allUsers);
}

async function P_getUser(req, res) {
  const id = req.params.id;
  const result = await prisma.Utilisateur.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.send(result);
}

async function P_ModifyUser(req, res) {
  const { nom, email, password, role } = req.body;
  const id = req.params.id;

  const user = await prisma.Utilisateur.update({
    where: {
      id: parseInt(id),
    },
    data: {
      email: email,
      nom: nom,
      password: password,
      role: role,
    },
  });
  res.send(user);
}

async function P_createUser(req, res) {
  const { nom, email, password, role } = req.body;
  const salt = await bcrypt.genSalt();

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await prisma.Utilisateur.create({
    data: {
      email: email,
      nom: nom,
      hashedPassword: hashedPassword,
      role: role,
    },
  });
// const token = jwt.sign........... to create and send the Token 
  res.status(201).send({ msg: "user created successfully", user: user });
}

async function P_deleteUser(req, res) {
  const _id = req.params.id;
  const result = await prisma.Utilisateur.delete({
    where: { id: parseInt(_id) },
  });
  res.send(result);
}

//* end of prisma functions *//

const getUsers = async (req, res) => {
  P_getUsers(res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* GET user with :id. */
const getUser = async (req, res) => {
  P_getUser(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* create users. */
const createUser = async (req, res, next) => {
  P_createUser(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* modify users. */
const ModifyUser = async (req, res, next) => {
  P_ModifyUser(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* delete users. */
const deleteUser = async (req, res) => {
  P_deleteUser(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  ModifyUser,
  deleteUser,
};
