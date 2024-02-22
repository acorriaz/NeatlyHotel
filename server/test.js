import prisma from "./utils/db.js";

async function main() {
    // await prisma.agent.create({
    //   username: "agenttest",
    //   email: "agenttest@gmail.com",
    //   password: "123456789012",
    // });

    // await prisma.BookingDetail.updateMany({
    //   where: {
    //     userId: "T06kXmgVWdWalw8MClWzfqZlOjt1",
    //   },
    //   data: {
    //     checkIn: "2024-02-23",
    //     checkOut: "2024-02-25",
    //   },
    // });

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