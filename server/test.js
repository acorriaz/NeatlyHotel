import prisma from "./utils/db.js";

async function main() {
    // await prisma.agent.create({
    //   data: {
    //     username: "donuttest",
    //     email: "donut@gmail.com",
    //     password: "123456789012",
    //   },
    // });

    await prisma.agentProfile.create({
      data: {
        agent: {
          connect: {
            agentId: 1, // Assuming the agentId exists in the Agent table
          },
        },
        firstName: "donut",
        lastName: "nakpong",
        dateOfBirth: "1999-01-03",
        phoneNumber: 1234567890,
      },
    });    


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