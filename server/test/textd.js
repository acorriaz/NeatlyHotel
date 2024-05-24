import prisma from "../utils/db.js";

async function main() {
  await prisma.roomImage.deleteMany({
    where: {
      roomImageId: 5,
    },
  });
  console.log("Batch delete is completed.");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
