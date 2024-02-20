import prisma from "../utils/db";

export default async function roomImageSeed() {
  await prisma.roomImage.createMany({
    data: [
      {
        roomTypeId: 1,
        imageUrl:
          "https://ahtzzacznyiounwwvrks.supabase.co/storage/v1/object/sign/Neatlyhotelimage/gardenview.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZWF0bHlob3RlbGltYWdlL2dhcmRlbnZpZXcuanBnIiwiaWF0IjoxNzA4MzM4NDI3LCJleHAiOjE3Mzk4NzQ0Mjd9.Va5Cio8cJxs3jzUfYzfwwG_zCUQhTR3Ekre4eZrh_7s&t=2024-02-19T10%3A27%3A06.832Z",
      },
      {
        roomTypeId: 2,
        imageUrl:
          "https://ahtzzacznyiounwwvrks.supabase.co/storage/v1/object/sign/Neatlyhotelimage/delux.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZWF0bHlob3RlbGltYWdlL2RlbHV4LmpwZWciLCJpYXQiOjE3MDgzMzgzNDIsImV4cCI6MTczOTg3NDM0Mn0.3ymZgpiY6wDRFi5Pb8bVucCG3BcYcEI27JEWcMvhjU0&t=2024-02-19T10%3A25%3A41.550Z",
      },
      {
        roomTypeId: 3,
        imageUrl:
          "https://ahtzzacznyiounwwvrks.supabase.co/storage/v1/object/sign/Neatlyhotelimage/superior.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZWF0bHlob3RlbGltYWdlL3N1cGVyaW9yLmpwZyIsImlhdCI6MTcwODMzODQ2NSwiZXhwIjoxNzM5ODc0NDY1fQ.VfLeoZFuQYh85gVVpZleTeZDI34bWBTmHPj9U8PVJfo&t=2024-02-19T10%3A27%3A44.260Z",
      },
      {
        roomTypeId: 4,
        imageUrl:
          "https://ahtzzacznyiounwwvrks.supabase.co/storage/v1/object/sign/Neatlyhotelimage/seaview.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZWF0bHlob3RlbGltYWdlL3NlYXZpZXcuanBnIiwiaWF0IjoxNzA4MzM4NDQwLCJleHAiOjE3Mzk4NzQ0NDB9.M5ZpaSjT80RCB_DuHOnMe4y-O3YXrVdEmFrdZbiiJmQ&t=2024-02-19T10%3A27%3A19.586Z",
      },
      {
        roomTypeId: 5,
        imageUrl:
          "https://ahtzzacznyiounwwvrks.supabase.co/storage/v1/object/sign/Neatlyhotelimage/supreme.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZWF0bHlob3RlbGltYWdlL3N1cHJlbWUuanBlZyIsImlhdCI6MTcwODMzODQ4MCwiZXhwIjoxNzM5ODc0NDgwfQ.rVluH-rwhT8ePvXvnxEnaggZZL26TRuNVfA3lZlztFA&t=2024-02-19T10%3A27%3A59.585Z",
      },
      {
        roomTypeId: 6,
        imageUrl:
          "https://ahtzzacznyiounwwvrks.supabase.co/storage/v1/object/sign/Neatlyhotelimage/seaview.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJOZWF0bHlob3RlbGltYWdlL3NlYXZpZXcuanBnIiwiaWF0IjoxNzA4MzM4NDQwLCJleHAiOjE3Mzk4NzQ0NDB9.M5ZpaSjT80RCB_DuHOnMe4y-O3YXrVdEmFrdZbiiJmQ&t=2024-02-19T10%3A27%3A19.586Z",
      },
    ],
  });
}
