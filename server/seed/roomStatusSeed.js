import prisma from "../utils/db.js";

export default async function roomStatusSeed() {
  await prisma.roomStatus.createMany({
    data: [
      {
        statusName: "Vacant",
      },
      {
        statusName: "Occupied",
      },
      {
        statusName: "Assign Clean",
      },
      {
        statusName: "Assign Dirty",
      },
      {
        statusName: "Vacant Clean",
      },
      {
        statusName: "Vacant Clean Inspected",
      },
      {
        statusName: "Vacant Clean Pick Up",
      },
      {
        statusName: "Occupied Clean",
      },
      {
        statusName: "Occupied Clean Inspected",
      },
      {
        statusName: "Occupied Dirty",
      },
      {
        statusName: "Out of Order",
      },
      {
        statusName: "Out of Service",
      },
      {
        statusName: "Out of Inventory",
      },
    ],
    skipDuplicates: true,
  });
}
