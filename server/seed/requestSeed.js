import prisma from "../utils/db.js";

export default async function roomTypeSeed() {
  await prisma.request.createMany({
    data: [
      {
        requestName: "Early check-in",
        requestPrice: 0,
        requestType: "Standard",
      },
      {
        requestName: "Late check-out",
        requestPrice: 0,
        requestType: "Standard",
      },
      {
        requestName: "Non-smoking room",
        requestPrice: 0,
        requestType: "Standard",
      },
      {
        requestName: "A room on the high floor",
        requestPrice: 0,
        requestType: "Standard",
      },
      {
        requestName: "A quiet room",
        requestPrice: 0,
        requestType: "Standard",
      },
      {
        requestName: "Baby cot",
        requestPrice: 400,
        requestType: "Special",
      },
      {
        requestName: "Airport transfer",
        requestPrice: 200,
        requestType: "Special",
      },
      {
        requestName: "Extra bed",
        requestPrice: 500,
        requestType: "Special",
      },
      {
        requestName: "Extra pillow",
        requestPrice: 100,
        requestType: "Special",
      },
      {
        requestName: "Phone chargers and adapters",
        requestPrice: 100,
        requestType: "Special",
      },
      {
        requestName: "Breakfast",
        requestPrice: 150,
        requestType: "Special",
      },
    ],
    skipDuplicates: true,
  });
}
