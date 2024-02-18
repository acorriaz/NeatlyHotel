/*
  Warnings:

  - You are about to drop the column `updated_at` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Agents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BedTypes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AgentProfile" DROP CONSTRAINT "AgentProfile_agentId_fkey";

-- DropForeignKey
ALTER TABLE "RoomImages" DROP CONSTRAINT "RoomImages_roomTypeId_fkey";

-- DropForeignKey
ALTER TABLE "RoomType" DROP CONSTRAINT "RoomType_bedTypeId_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "updated_at",
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "UserProfile" ALTER COLUMN "profilePicUrl" DROP NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "password";

-- DropTable
DROP TABLE "Agents";

-- DropTable
DROP TABLE "BedTypes";

-- DropTable
DROP TABLE "RoomImages";

-- CreateTable
CREATE TABLE "Agent" (
    "agentId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("agentId")
);

-- CreateTable
CREATE TABLE "RoomImage" (
    "roomImageId" SERIAL NOT NULL,
    "roomTypeId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "RoomImage_pkey" PRIMARY KEY ("roomImageId")
);

-- CreateTable
CREATE TABLE "BedType" (
    "bedTypeId" SERIAL NOT NULL,
    "bedTypeName" TEXT NOT NULL,

    CONSTRAINT "BedType_pkey" PRIMARY KEY ("bedTypeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agent_username_key" ON "Agent"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_email_key" ON "Agent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BedType_bedTypeName_key" ON "BedType"("bedTypeName");

-- AddForeignKey
ALTER TABLE "AgentProfile" ADD CONSTRAINT "AgentProfile_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("agentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomType" ADD CONSTRAINT "RoomType_bedTypeId_fkey" FOREIGN KEY ("bedTypeId") REFERENCES "BedType"("bedTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomImage" ADD CONSTRAINT "RoomImage_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("roomTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
