const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/* GET Articles. */

async function P_getArticles(res, take, skip) {
  const allArticles = await prisma.Article.findMany({
    skip: parseInt(skip),
    take: parseInt(take),
  });
  res.send(allArticles);
}

async function P_getArticle(req, res) {
  const id = req.params.id;

  const result = await prisma.Article.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  res.send(result);
}

async function P_ModifyArticle(req, res) {
  const { utilisateurId, titre, contenu, image, published } = req.body;
  const id = req.params.id;
  const user = await prisma.Article.update({
    where: {
      id: parseInt(id),
    },
    data: {
      titre: titre,
      contenu: contenu,
      image: image,
      utilisateurId: parseInt(utilisateurId),
      published: Boolean(published),
    },
  });
  res.send(user);
}

async function P_createArticle(req, res) {
  const { utilisateurId, titre, contenu, image, published } = req.body;
  const article = await prisma.Article.create({
    data: {
      titre: titre,
      contenu: contenu,
      image: image,
      utilisateurId: parseInt(utilisateurId),
      published: Boolean(published),
    },
  });
  res.status(201).send("Article created successfully");
}

async function P_deleteArticle(req, res) {
  const id = req.params.id;
  const result = await prisma.Article.delete({
    where: { id: parseInt(id) },
  });
  res.send(result);
}


async function Articles_data(res, take, skip) {
  try {
    const articles = await prisma.Article.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      include: {
        commentaires: {
          select: {
            contenu: true,
          },
        },
        utilisateur: {
          select: {
            nom: true,
          },
        },
        categories: {
          select: {
            nom: true,
          },
        },
      },
    });

    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// async function UserArticles(res, take, skip , id) {

//   try {
//     const articles = await prisma.Article.findMany({
//       skip: parseInt(skip),
//       take: parseInt(take),
//       where: {
//         utilisateurId: parseInt(id),
//       },
//     });

//     res.json(articles);
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
/* prisma functions */

const getArticles = async (req, res) => {
  const { take, skip } = req.query;
  console.log("here");
  P_getArticles(res, take, skip)
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
  P_getArticle(req, res)
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
const createArticle = async (req, res) => {
  P_createArticle(req, res)
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
const ModifyArticle = async (req, res, next) => {
  P_ModifyArticle(req, res)
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
const deleteArticle = async (req, res, next) => {
  P_deleteArticle(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
const __Articles_data = async (req, res, next) => {
  const { take, skip } = req.query;

  Articles_data(res, take, skip)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

async function UserArticles(res, take, skip, id) {
  try {
    const articles = await prisma.Article.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
      where: {
        utilisateurId: parseInt(id),
      },
    });

    res.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

const __UserArticles = async (req, res, next) => {
  const { take, skip } = req.query;
  const { id } = req.params;

  UserArticles(res, take, skip, id)
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
  getArticles,
  getArticle,
  createArticle,
  ModifyArticle,
  deleteArticle,
  __Articles_data,
  __UserArticles,
};
