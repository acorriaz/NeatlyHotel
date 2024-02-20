import prisma from "../utils/db.js";

export default async function roomTypeSeed() {
  await prisma.roomType.createMany({
    data: [
      {
        roomTypeName: "Superior Garden View",
        description:
          "Rooms (50sqm) with full garden views, 1 double bed(king size), bathroom with bathtub & shower.",
        guestCapacity: 4,
        roomSize: 50,
        roomPrice: 6000,
        bedTypeId: 3, // double bed (king size)
      },
      {
        roomTypeName: "Deluxe",
        description:
          "Rooms (32sqm) with 1 single bed, bathroom with bathtub & shower.",
        guestCapacity: 2,
        roomSize: 32,
        roomPrice: 4000,
        bedTypeId: 1, // single bed
      },
      {
        roomTypeName: "Superior",
        description:
          "Rooms (35sqm) with 1 double bed, bathroom with bathtub & shower.",
        guestCapacity: 2,
        roomSize: 35,
        roomPrice: 4500,
        bedTypeId: 2, // double bed
      },
      {
        roomTypeName: "Premier Sea View",
        description:
          "Rooms (40sqm) with full sea views, 1 twin bed, bathroom with bathtub & shower.",
        guestCapacity: 2,
        roomSize: 40,
        roomPrice: 5500,
        bedTypeId: 4, // twin bed
      },
      {
        roomTypeName: "Supreme",
        description:
          "Rooms (35sqm) with 1 double bed(king size), bathroom with bathtub & shower.",
        guestCapacity: 4,
        roomSize: 35,
        roomPrice: 5000,
        bedTypeId: 3, // double bed (king size)
      },
      {
        roomTypeName: "Suite",
        description:
          "Rooms (32sqm) with 1 single bed, bathroom with bathtub & shower.",
        guestCapacity: 2,
        roomSize: 32,
        roomPrice: 3000,
        bedTypeId: 1, // single bed
      },
    ],
    skipDuplicates: true,
  });
}
