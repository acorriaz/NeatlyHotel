import { Router } from "express";
import prisma from "../utils/db.js";

const agentRouter = Router();

agentRouter.get("/:agentId", async (req, res) => {
  const agentIdFromClient = Number(req.params.agentId);

  try {
    const response = await prisma.agent.findUnique({
      where: {
        agentId: agentIdFromClient,
      },
      include: {
        agentProfile: true,
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({ message: "Agent not found" });
  }
});

agentRouter.get("/user-email/:username", async (req, res) => {
  const { username } = req.params;
  console.log(username);
  const agent = await prisma.agent.findFirst({
    where: {
      username,
    },
    select: {
      email: true,
    },
  });

  console.log("agent: ", agent);

  if (!agent) {
    return res.status(404).json({ message: "Username not found" });
  }

  return res.json({ email: agent.email });
});

agentRouter.get("/user-check/:username", async (req, res) => {
  const { username, email } = req.params;
  const agent = await prisma.agent.findMany({
    where: {
      OR: [{ username }, { email }],
    },
    include: {
      agentProfile: true,
    },
  });

  if (agent.length > 0) {
    return res
      .status(409)
      .json({ message: "Username Email already exists" });
  }

  return res.json({ message: "Didn't have existing username" });
});

// agentRouter.post("/register", async (req, res) => {
//   console.log("run");
//   const {
//     uId,
//     username,
//     email,
//     idNumber,
//     fullName,
//     dateOfBirth,
//     country,
//     cardNumber,
//     cardOwner,
//     cardExpiry,
//   } = req.body;

//   const firstName = fullName.split(" ")[0];
//   const lastName = fullName.split(" ")[1];

//   const user = await prisma.user.create({
//     data: {
//       userId: uId,
//       username,
//       email,
//       userProfile: {
//         create: {
//           firstName,
//           lastName,
//           fullName,
//           dateOfBirth,
//           idNumber,
//           cardExpiry,
//           cardNumber,
//           cardOwner,
//           country,
//         },
//       },
//     },
//   });
//   return res.json(user);
// });

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


export default agentRouter;