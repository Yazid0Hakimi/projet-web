const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET Articles. */

async function P_getArticles(res) {
  const allArticles = await prisma.Utilisateur.findMany();
  res.send(allArticles);
}

async function P_getArticles(res, _id) {
  const result = await prisma.Utilisateur.findUnique({
    where: {
      id: parseInt(_id),
    },
  });
  res.send(result);
}

async function P_ModifyArticles(res, req) {
  const { id, nom, email, password, role } = req.body;

  const user = await prisma.Utilisateur.update({
    where: {
      id: parseInt(id),
    },
    data: {//////////////////////////////////
      email: email,
      nom: nom,
      password: password,
      role: role,
    },
  });
  res.send(user);
}

async function P_createArticles(res, req) {
  const { nom, email, password, role } = req.body;
  const user = await prisma.Utilisateur.create({
    data: {
      email: email,
      nom: nom,
      password: password,
      role: role,
    },
  });
  res.status(201).send("user created successfully");
}

async function P_deleteArticles(res, _id) {
  const result = await prisma.Utilisateur.delete({
    where: { id: 3 },
  });
  res.send(result);
}

const getArticles = async (req, res, next) => {
  P_getArticles(res)
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
const getArticle = async (req, res, next) => {
  P_getArticle(res, req.query.id)
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
  P_createUser(res, req)
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
  P_ModifyUser(res, req)
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
const deleteUser = async (req, res, next) => {
  P_deleteUser(res, req)
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
