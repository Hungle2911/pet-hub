import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const owner = await prisma.owner.create({
    data: {
      username: "owner1",
      email: "owner1@example.com",
      password: "password",
      bio: "Bio of owner 1",
      cats: {
        create: [
          {
            name: "Whiskers",
            breed: "Sphynx",
            age: 2,
            favoriteFoods: "Tuna, Salmon",
            disposition: "Sweet as Pie",
          },
        ],
      },
    },
  });

  const sitter = await prisma.sitter.create({
    data: {
      username: "sitter1",
      email: "sitter1@example.com",
      password: "password",
      bio: "Bio of sitter 1",
    },
  });

  const cat = await prisma.cat.findFirst({
    where: { ownerId: owner.id },
  });

  await prisma.booking.create({
    data: {
      startDate: new Date(),
      endDate: new Date(),
      cat: { connect: { id: cat!.id } },
      owner: { connect: { id: owner.id } },
      sitter: { connect: { id: sitter.id } },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
