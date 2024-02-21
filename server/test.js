import prisma from "./utils/db.js";

async function main() {
    await prisma.BookingDetail.updateMany({
      where: {
        bookingDetailId: 20,
      },
      data: {
        checkIn: "2024-02-24",
        checkOut: "2024-02-27",
      },
    });

    // await prisma.guestRequest.createMany({
    //   data: [
    //     {
    //       bookingDetailId: 17,
    //       requestId: 1,
    //     },
    //     {
    //       bookingDetailId: 17,
    //       requestId: 2,
    //     },
    //     {
    //       bookingDetailId: 18,
    //       requestId: 1,
    //     },
    //     {
    //       bookingDetailId: 19,
    //       requestId: 2,
    //     },
    //     {
    //       bookingDetailId: 19,
    //       requestId: 1,
    //     },
    //     {
    //       bookingDetailId: 20,
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