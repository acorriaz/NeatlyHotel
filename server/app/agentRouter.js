import { Router } from "express";
import prisma from "../utils/db.js";

const agentRouter = Router();
agentRouter.get("/customer-booking", async (req, res) => {
  const keywords = req.query.keywords || "";

  try {
    const response = await prisma.bookingDetail.findMany({
      where: {
        OR: [
          {
            user: {
              username: {
                contains: keywords,
              },
            },
          },
          {
            room: {
              roomType: {
                roomTypeName: {
                  contains: keywords,
                },
              },
            },
          },
        ],
      },
      include: {
        user: true,
        room: {
          include: {
            roomType: {
              include: {
                bedType: true,
              },
            },
          },
        },
        guestRequest: {
          include: {
            request: {
              select: {
                requestType: true,
                requestName: true,
                requestPrice: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json(err);
  }
});


// agentRouter.get("/:id", async (req, res) => {
//   const agentIdFromClient = req.params.id;

//   try {
//     const response = await prisma.agent.findUnique({
//       where: {
//         agentId: agentIdFromClient,
//       },
//       include: {
//         agentProfile: true,
//       },
//     });

//     return res.status(200).json(response);
//   } catch (err) {
//     return res.status(404).json({ message: "User not found" });
//   }
// });

// agentRouter.get("/user-email/:username", async (req, res) => {
//   const { username } = req.params;
//   console.log(username);
//   const user = await prisma.user.findFirst({
//     where: {
//       username,
//     },
//     select: {
//       email: true,
//     },
//   });

//   console.log("user: ", user);

//   if (!user) {
//     return res.status(404).json({ message: "Username not found" });
//   }

//   return res.json({ email: user.email });
// });

// agentRouter.get("/user-check", async (req, res) => {
//   const { username, email, idNumber } = req.params;
//   const user = await prisma.user.findMany({
//     where: {
//       OR: [{ username }, { email }, { idNumber }],
//     },
//     include: {
//       userProfile: true,
//     },
//   });

//   if (user.length > 0) {
//     return res
//       .status(409)
//       .json({ message: "Username Email or idNumber already exists" });
//   }

//   return res.json({ message: "Didn't have existing username" });
// });

// agentRouter.post("/register", async (req, res) => {
//   console.log("run");
//   const {
//     username,
//     email,
//     password,
//     agentId,
//     firstName,
//     lastName,
//     dateOfBirth,
//     phoneNumber,
//   } = req.body;

//   const firstName = fullName.split(" ")[0];
//   const lastName = fullName.split(" ")[1];

//   const user = await prisma.agent.create({
//     data: {
//       agentId: id,
//       username,
//       email,
//       password,
//       agentProfile: {
//         create: {
//           firstName,
//           lastName,
//           dateOfBirth,
//           phoneNumber,
//         },
//       },
//     },
//   });
//   return res.json(user);
// });

export default agentRouter;