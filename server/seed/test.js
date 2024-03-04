import prisma from "../utils/db.js";

async function main() {
  const users = await prisma.roomAmenitie.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
