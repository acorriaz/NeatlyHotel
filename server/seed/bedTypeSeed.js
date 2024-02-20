import prisma from "../utils/db.js";

export default async function bedTypeSeed() {
  await prisma.bedType.createMany({
    data: [
      { bedTypeName: "Single bed" },
      { bedTypeName: "Double bed" },
      { bedTypeName: "Double bed (King size)" },
      { bedTypeName: "Twin bed" },
    ],
    skipDuplicates: true,
  });
}
