// const { PrismaClient } = require("@prisma/client");
// const { faker } = require("@faker-js/faker");

// const bcrypt = require("bcrypt");

// const prisma = new PrismaClient();

// const seed = async () => {
//   try {
//     // Generate 10 users with the "AUTHOR" role
//     //  for (let i = 0; i < 10; i++) {
//     //    const pass = faker.internet.password();
//     //    const salt = await bcrypt.genSalt();
//     //    const passwordHash = await bcrypt.hash(pass, salt);
//     //    const user = await prisma.utilisateur.create({
//     //      data: {
//     //        nom: faker.person.firstName(),
//     //        email: faker.internet.email(),
//     //        password: pass,
//     //        hashedPassword: passwordHash,
//     //        role: "AUTHOR",
//     //      },
//     //    });
//     //  }
//     //   console.log("10 users Created");

//     // Generate 1 user with the "ADMIN" role
//     const pass = faker.internet.password();
//     const salt = await bcrypt.genSalt();
//        const passwordHash = await bcrypt.hash(pass, salt);

//     const adminUser = await prisma.utilisateur.create({
//       data: {
//         nom: faker.person.firstName(),
//         email: faker.internet.email(),
//         password: pass,
//         hashedPassword: passwordHash,

//         role: "ADMIN",
//       },
//     });
//     console.log(" one admin user created");

//     // Generate 10 categories
//     for (let i = 0; i < 10; i++) {
//       const category = await prisma.categorie.create({
//         data: {
//           nom: faker.helpers.arrayElement(["free", "basic", "business"]),
//         },
//       });
//       console.log("Created category:", category);
//     }

//     // Generate 100 articles
//     for (let i = 0; i < 100; i++) {
//       const randomCategories = await prisma.categorie.findMany({
//         take:  faker.number.int({ min: 1, max: 4 }),
//         skip:  faker.number.int({ min: 0, max: 6 }),
//       });

//       const author = await prisma.utilisateur.findFirst({
//         where: {
//           role: "AUTHOR",
//         },
//       });

//       const article = await prisma.article.create({
//         data: {
//           utilisateurId: author.id,
//           titre: faker.lorem.sentence(),
//           contenu: faker.lorem.paragraphs(),
//           image: faker.image.url(),
//           published: faker.datatype.boolean(),
//           categories: {
//             connect: randomCategories.map((category) => ({ id: category.id })),
//           },
//         },
//       });
//       console.log("Created article:", article);

//       // Generate 0 to 20 comments for each article
//       const commentCount =  faker.number.int({ min: 0, max: 20 });
//       for (let j = 0; j < commentCount; j++) {
//         const comment = await prisma.Commentaire.create({
//           data: {
//             articleId: faker.helpers.arrayElement([1, 2, 3]),
//             email: faker.internet.email(),
//             contenu: faker.lorem.sentences(),
//           },
//         });
//         console.log("Created comment:", comment);
//       }
//     }
//   } catch (error) {
//     console.error("Seeding failed:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// seed();
