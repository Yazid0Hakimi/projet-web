const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET commentaires. */

async function P_getCommentaires(res) {
  const allCommentaires = await prisma.Commentaire.findMany();
  res.send(allCommentaires);
}

async function P_getCommentaire(res, _id) {
  const result = await prisma.Commentaire.findUnique({
    where: {
      id: parseInt(_id),
    },
  });
  res.send(result);
}

async function P_modifyCommentaire(res, req) {
  const { id, texte, articleId } = req.body;

  const commentaire = await prisma.Commentaire.update({
    where: {
      id: parseInt(id),
    },
    data: {
      texte: texte,
      articleId: parseInt(articleId),
    },
  });
  res.send(commentaire);
}

async function P_createCommentaire(res, req) {
  const { texte, articleId } = req.body;
  const commentaire = await prisma.Commentaire.create({
    data: {
      texte: texte,
      articleId: parseInt(articleId),
    },
  });
  res.status(201).send("Commentaire created successfully");
}

async function P_deleteCommentaire(res, _id) {
  const result = await prisma.Commentaire.delete({
    where: { id: parseInt(_id) },
  });
  res.send(result);
}

const getCommentaires = async (req, res, next) => {
  P_getCommentaires(res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* GET commentaire with :id. */
const getCommentaire = async (req, res, next) => {
  P_getCommentaire(res, req.query.id)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* create commentaires. */
const createCommentaire = async (req, res, next) => {
  P_createCommentaire(res, req)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* modify commentaires. */
const modifyCommentaire = async (req, res, next) => {
  P_modifyCommentaire(res, req)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

/* delete commentaires. */
const deleteCommentaire = async (req, res, next) => {
  P_deleteCommentaire(res, req.query.id)
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
  getCommentaires,
  getCommentaire,
  createCommentaire,
  modifyCommentaire,
  deleteCommentaire,
};
