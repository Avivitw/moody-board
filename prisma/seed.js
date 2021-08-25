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
    //categories: { set: [{ id: 2 }] },
    // colors: colorData,
  },
];

const categoriesData = [
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
    image: "/minimalist.jpeg",
  },
  {
    name: "Traditional",
    description:
      "When it comes to interior design styles, almost everything is rooted in traditional interior design ideas, and for good reason. That said, you can make traditional style interior design all your own by incorporating pieces that speak to your personality and lifestyle while making a statement. Take the room above, sure it features a depth and layering, a traditional beige overstuffed sofa, a Persian rug, and requisite Louis VI chair, however, what sets it apart from any other traditional room is the updated contemporary light fixture and the conversation starting art piece.",
    parentId: 1,
    image: "/traditional.jpeg",
  },
  {
    name: "Rustic",
    description:
      "Taking inspiration from the outdoors and a combination of farmhouse and industrial interior design styles, rustic décor places an emphasis on natural and weathered finishes, raw wood, stone, and leather, with unexpected touches and an overall sophisticated bent. We love how the room featured above fuses a varied mix of statement-making furnishings like the custom plush sherpa sofas, the industrial inspired wire pendants, and unique leather chairs. That said, we’re all for modern interior design styles that combine various elements to create a beautifully realized, one-of-a-kind room.",
    parentId: 1,
    image: "/rustic.jpeg",
  },
  {
    name: "Shabby Chic",
    description:
      "After gaining massive popularity in the mid-80’s and 90’s as one of the top go-to interior design styles when looking to evoke laid back California cool, shabby chic ultimately received quite a bit of backlash having been mislabeled as granny décor – which is completely false. For starters, shabby chic has roots in antique and vintage French design and furnishings with a decidedly comfortable take, and most importantly, boasts a timeless lived-in vintage-inspired appeal. Soft and slightly femme, shabby chic marries traditional style interior design elements with vague farmhouse touches. Think a white overstuffed sofa, distressed painted wood, and ornate gilt touches like a gold French mirror.",
    parentId: 1,
    image: "/shabby-chic.png",
  },
  {
    name: "Scandinavian",
    description:
      "Increasingly popular, Scandinavian interior design styles emphasize a clean and serene simplicity that’s universal in appeal. Fully functional and minimal to a degree, Scandinavian décor highlights organic shapes with subtle interest, tonal textural plays, and a relaxed appeal in all-white spaces with gray undertones. Hints of color are brought in via art and a single textile such as a small throw or rug. One of the easiest to master of contemporary interior design styles, Scandinavian interior design is all about a balanced and carefully edited mix of elements. Though there are plenty of interior design styles trends that take cues from Scandinavian interior design styles, we’re all about going full throttle as this is one design movement that’s worth taking note of.",
    parentId: 1,
    image: "/scandinavian.jpeg",
  },
  {
    name: "Bohemian",
    description:
      "One of the most timeless and endlessly popular interior design styles out there, bohemian décor represents a care and fuss-free freedom that’s unquestionably heady and intoxicating. Boasting a globally inspired comfortable mix of exotic finds and vintage and antique furnishings sourced from passionate flea-market treks and travels, the eclectic style also touches on hints of everyday glamor via crystal extras, beaded fabrications, jewel tones, and overall relaxed mood. If you’re already blessed with a varied array of distinct furnishings and admire the idea of beautifully rendered juxtapositions, this may just be the perfect interior design styles living room to consider.",
    parentId: 1,
    image: "/bohemian.jpeg",
  },
  {
    name: "Mid-Century Modern",
    description:
      "Probably one of the most prolific interior design styles of all time, mid-century modern borrows from the best of 50’s and 60’s for a clean retro Danish inspired feel. Simple straight forward silhouettes, organic shapes, quiet fabrications, and an emphasis on functionality are hallmarks of mid-century modern styling. That said, the movements minimal bent makes it a great option when looking to update traditional style interior design with ease. Plus, mid-century modern furnishings look great in almost any room and make for great elements when looking to create rich, diverse, interior design styles living room. And as far as interior design styles trends go, this is one fail proof one we suggest you give a go.",
    parentId: 1,
    image: "/mid-centruy.jpeg",
  },
  {
    name: "Industrial",
    description:
      "As the name evokes an urban vibe with warehouse and factory elements thrown in the mix, it should come as no surprise that industrial interior design practices lend a clean, somewhat masculine and minimal spirit to any room. Think a neutral color scheme, reclaimed machinery, moody hues, raw woods and unfinished metals, and ultimately, statement-making throwbacks with a slightly steampunk feel. That said, we wouldn’t recommend going industrial when considering the best interior design styles for small house as this is one aesthetic that calls for plenty of breathing room to take in the often oversized machinery inspired elements. However, you can inject small doses of the design movement when looking at industrial interior design styles living room by incorporating raw metal decorative extras say on a bookshelf here, or a in small nook there.",
    parentId: 1,
    image: "/modern-industrial.jpeg",
  },
];

const boardsCategoriesData = [
  {
    moodboardId: 1,
    categoryId: 2,
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
  for (const c of categoriesData) {
    const style = await prisma.category.create({
      data: c,
    });
  }
  for (const b of boardData) {
    const board = await prisma.moodBoard.create({
      data: b,
    });
  }

  for (const bc of boardsCategoriesData) {
    const board = await prisma.boardsCategories.create({
      data: bc,
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
