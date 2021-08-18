const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    email: "alice@example.com",
  },
  {
    name: "Nilu",
    email: "nilu@example.com",
  },
  {
    name: "Avivit",
    email: "avivit@example.com",
  },
];

const colorData = [
  {
    r: 174,
    g: 191,
    b: 115,
  },
  {
    r: 70,
    g: 85,
    b: 79,
  },
  {
    r: 241,
    g: 175,
    b: 121,
  },
  {
    r: 251,
    g: 214,
    b: 171,
  },
  {
    r: 250,
    g: 228,
    b: 216,
  },
  {
    r: 251,
    g: 234,
    b: 233,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const c of colorData) {
    const color = await prisma.color.create({
      data: c,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
