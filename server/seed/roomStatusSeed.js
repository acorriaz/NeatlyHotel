import prisma from "../utils/db";

export default async function roomStatusSeed() {
  await prisma.roomStatus.createMany({
    data: [
      {
        status: "Vacant",
      },
      {
        status: "Occupied",
      },
      {
        status: "Assign Clean",
      },
      {
        status: "Assign Dirty",
      },
      {
        status: "Vacant Clean",
      },
      {
        status: "Vacant Clean Inspected",
      },
      {
        status: "Vacant Clean Pick Up",
      },
      {
        status: "Occupied Clean",
      },
      {
        status: "Occupied Clean Inspected",
      },
      {
        status: "Occupied Dirty",
      },
      {
        status: "Out of Order",
      },
      {
        status: "Out of Service",
      },
      {
        status: "Out of Inventory",
      },
    ],
  });
}
