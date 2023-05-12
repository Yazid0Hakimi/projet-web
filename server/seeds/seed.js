const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Generate 10 users with the "AUTHOR" role
    for (let i = 0; i < 10; i++) {
      const pass = faker.internet.password();
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(pass, salt);
      const user = await prisma.utilisateur.create({
        data: {
          nom: faker.person.firstName(),
          email: faker.internet.email(),
          password: pass,
          hashedPassword: passwordHash,
          role: "AUTHOR",
        },
      });
    }
    console.log("10 users Created");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
