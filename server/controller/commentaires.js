const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET commentaires. */

async function P_getCommentaires(res) {
  const allCommentaires = await prisma.commentaire.findMany();
  res.send(allCommentaires);
}

async function P_getCommentaire(req, res) {
  const id = req.params.id;
  const result = await prisma.Commentaire.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.send(result);
}

async function P_modifyCommentaire(req, res) {
  const id = req.params.id;
  const { contenu, email, articleId } = req.body;

  const commentaire = await prisma.Commentaire.update({
    where: {
      id: parseInt(id),
    },
    data: {
      contenu: contenu,
      articleId: parseInt(articleId),
      email: email
    },
  });
  res.send({"msg" : "commentaire edited" , "commentaire" : commentaire});
}

async function P_createCommentaire(req, res) {
  const { contenu, articleId, email } = req.body;
  const commentaire = await prisma.Commentaire.create({
    data: {
      contenu: contenu,
      email: email,
      articleId: parseInt(articleId),
    },
  });
  res.status(201).send({
    msg: "Commentaire created successfully",
    commentaire: commentaire,
  });
}

async function P_deleteCommentaire(req, res) {
  const id = req.params.id;
  const result = await prisma.Commentaire.delete({
    where: { id: parseInt(id) },
  });
  res.send(result);
}

const getCommentaires = async (req, res) => {
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
const getCommentaire = async (req, res) => {
  P_getCommentaire(req, res)
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
const createCommentaire = async (req, res) => {
  P_createCommentaire(req, res)
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
const modifyCommentaire = async (req, res) => {
  P_modifyCommentaire(req, res)
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
const deleteCommentaire = async (req, res) => {
  P_deleteCommentaire(req, res)
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
