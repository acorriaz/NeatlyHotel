import prisma from "./utils/db.js";

async function main() {
    // await prisma.BookingDetail.createMany({
    //   data: [
    //     {
    //       userId: "tMUtITVAwzOHICPzt8GxEZGODs42",
    //       roomId: 6,
    //       paymentMethod: "Cash",
    //       totalPrice: 3500,
    //       checkIn: "21/02/2024",
    //       checkOut: "22/02/2024",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       cancelledAt: null,
    //     },
    //     {
    //       userId: "tMUtITVAwzOHICPzt8GxEZGODs42",
    //       roomId: 8,
    //       paymentMethod: "Cash",
    //       totalPrice: 4200,
    //       checkIn: "20/02/2024",
    //       checkOut: "22/02/2024",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       cancelledAt: null,
    //     },
    //   ],
    // });

    //     await prisma.BookingDetail.createMany({
    //   data: [
    //     {
    //       userId: "tMUtITVAwzOHICPzt8GxEZGODs42",
    //       roomId: 6,
    //       paymentMethod: "Cash",
    //       totalPrice: 3500,
    //       checkIn: "21/02/2024",
    //       checkOut: "22/02/2024",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       cancelledAt: null,
    //     },
    //     {
    //       userId: "tMUtITVAwzOHICPzt8GxEZGODs42",
    //       roomId: 8,
    //       paymentMethod: "Cash",
    //       totalPrice: 4200,
    //       checkIn: "20/02/2024",
    //       checkOut: "22/02/2024",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //       cancelledAt: null,
    //     },
    //   ],
    // });

    await prisma.guestRequest.createMany({
      data: [
        {
          bookingDetailId: 1,
          requestId: 1,
        },
        {
          bookingDetailId: 1,
          requestId: 2,
        },
        {
          bookingDetailId: 3,
          requestId: 1,
        },
        {
          bookingDetailId: 3,
          requestId: 2,
        },
        {
          bookingDetailId: 4,
          requestId: 1,
        },
        {
          bookingDetailId: 2,
          requestId: 1,
        },
      ],
    });

    console.log("insert success")
}

main()
    .catch((e)=>{
        throw e;
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    })