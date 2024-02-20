import prisma from "./utils/db.js";

async function main() {
    await prisma.BookingDetail.createMany({
      data: [
        {
          userId: "T06kXmgVWdWalw8MClWzfqZlOjt1",
          roomId: 6,
          paymentMethod: "Cash",
          totalPrice: 3500,
          checkIn: "23/02/2024",
          checkOut: "24/02/2024",
          updatedAt: new Date(),
          cancelledAt: null,
        },
        {
          userId: "T06kXmgVWdWalw8MClWzfqZlOjt1",
          roomId: 8,
          paymentMethod: "Cash",
          totalPrice: 4200,
          checkIn: "20/02/2024",
          checkOut: "22/02/2024",
          updatedAt: new Date(),
          cancelledAt: null,
        },
        {
          userId: "T06kXmgVWdWalw8MClWzfqZlOjt1",
          roomId: 1,
          paymentMethod: "Cash",
          totalPrice: 3500,
          checkIn: "21/02/2024",
          checkOut: "22/02/2024",
          updatedAt: new Date(),
          cancelledAt: null,
        },
        {
          userId: "T06kXmgVWdWalw8MClWzfqZlOjt1",
          roomId: 3,
          paymentMethod: "Cash",
          totalPrice: 4200,
          checkIn: "25/02/2024",
          checkOut: "27/02/2024",
          updatedAt: new Date(),
          cancelledAt: null,
        },
      ],
    });

    // await prisma.guestRequest.createMany({
    //   data: [
    //     {
    //       bookingDetailId: 1,
    //       requestId: 1,
    //     },
    //     {
    //       bookingDetailId: 1,
    //       requestId: 2,
    //     },
    //     {
    //       bookingDetailId: 3,
    //       requestId: 1,
    //     },
    //     {
    //       bookingDetailId: 3,
    //       requestId: 2,
    //     },
    //     {
    //       bookingDetailId: 4,
    //       requestId: 1,
    //     },
    //     {
    //       bookingDetailId: 2,
    //       requestId: 1,
    //     },
    //   ],
    // });

    console.log("insert success")
}

main()
    .catch((e)=>{
        throw e;
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    })