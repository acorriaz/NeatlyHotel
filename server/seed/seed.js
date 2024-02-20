import prisma from "../utils/db.js";
import roomStatusSeed from "./roomStatusSeed.js";
import roomSeed from "./roomSeed.js";
import roomImageSeed from "./roomImageSeed.js";
import requestSeed from "./requestSeed.js";
import roomTypeSeed from "./roomTypeSeed.js";

async function main() {
  await roomStatusSeed();
  console.log("Room Status Seed Done");

  await roomTypeSeed();
  console.log("Room Type Seed Done");

  await requestSeed();
  console.log("Request Seed Done");

  await roomImageSeed();
  console.log("Room Image Seed Done");

  await roomSeed();
  console.log("Room Seed Done");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
