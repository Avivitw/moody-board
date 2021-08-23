const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userData = [
  {
    name: "Avivit",
    email: "wavivit@gmail.com",
  },
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
    moodBoardId: 1,
    r: 174,
    g: 191,
    b: 115,
  },
  {
    moodBoardId: 1,
    r: 70,
    g: 85,
    b: 79,
  },
  {
    moodBoardId: 1,
    r: 241,
    g: 175,
    b: 121,
  },
  {
    moodBoardId: 1,
    r: 251,
    g: 214,
    b: 171,
  },
  {
    moodBoardId: 1,
    r: 250,
    g: 228,
    b: 216,
  },
  {
    moodBoardId: 1,
    r: 251,
    g: 234,
    b: 233,
  },
];

const boardData = [
  {
    userId: 1,
    name: "Avivit's board",
    // categories: { connect: [{ id: 2 }] },
    // colors: colorData,
  },
];

const designStyleData = [
  {
    name: "Design Style",
    description: "Style",
    parentId: 0,
  },
  {
    name: "Minimalist",
    description:
      "One of the most thoroughly modern interior design styles to consider, people often tend to confuse minimalism with a stark coldness and uncomfortable severity – which is hardly the case at all. In fact, there’s even a warmer take on minimal interior design (warm minimalism) that’s full of no-fuss, clean elegance. Think simplicity, refinement, and a deft hand at sumptuous comfort and functionality. The key here is to keep rooms spare and well-edited with printless fabrications and décor extras that must serve a dual purpose. When thinking minimal interior design styles trends, think of a modern art gallery or museum as a reference with their pulled together approach to filling a space with the barest of essentials that still feature a lively sense of drama either organic or abstract.",
    parentId: 1,
  },
  {
    name: "Contemporary",
    description:
      "Though people often tend to confuse modern interior design styles with contemporary interior design, there is a difference between the two that makes them unique in and of themselves. Contemporary style is completely of the moment while modern interior design styles can almost mean anything forward-thinking from the 50’s to the early aughts. Contemporary interior design styles trends also have more freedom as modern is usually fixed around squared, graphic lines and a particular take on modernity.",
    parentId: 1,
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
  for (const d of designStyleData) {
    const style = await prisma.category.create({
      data: d,
    });
  }
  for (const b of boardData) {
    const board = await prisma.moodBoard.create({
      data: b,
    });
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
