const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET categories. */

async function P_getCategories(res) {
  const allCategories = await prisma.Categorie.findMany({
    include: {
      articles: true,
    },
  });
  res.send(allCategories);
}

async function P_getCategorie(req, res) {
  const id = req.params.id;
  const result = await prisma.Categorie.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.send(result);
}

async function P_modifyCategorie(req, res) {
  const id = req.params.id;
  const { nom, description } = req.body;

  const categorie = await prisma.Categorie.update({
    where: {
      id: parseInt(id),
    },
    data: {
      nom: nom,
      description: description,
    },
  });
  res.send({ msg: "categorie edited", Categorie: categorie });
}

async function P_createCategorie(req, res) {
  const { nom } = req.body;
  const categorie = await prisma.Categorie.create({
    data: {
      nom: nom,
    },
  });
  res.status(201).send({
    msg: "Categorie created successfully",
    categorie: categorie,
  });
}

async function P_deleteCategorie(req, res) {
  const id = req.params.id;
  const result = await prisma.Categorie.delete({
    where: { id: parseInt(id) },
  });
  res.send(result);
}

const getCategories = async (req, res) => {
  P_getCategories(res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* GET categorie with :id. */
const getCategorie = async (req, res) => {
  P_getCategorie(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* create categories. */
const createCategorie = async (req, res) => {
  P_createCategorie(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* modify categories. */
const modifyCategorie = async (req, res) => {
  P_modifyCategorie(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* delete categories. */
const deleteCategorie = async (req, res) => {
  P_deleteCategorie(req, res)
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
  getCategories,
  getCategorie,
  createCategorie,
  modifyCategorie,
  deleteCategorie,
};
