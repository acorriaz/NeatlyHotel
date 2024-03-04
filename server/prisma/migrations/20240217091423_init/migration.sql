/*
  Warnings:

  - The primary key for the `Agents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `agent_id` on the `Agents` table. All the data in the column will be lost.
  - The primary key for the `Request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `request_id` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `request_name` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `request_price` on the `Request` table. All the data in the column will be lost.
  - You are about to drop the column `request_type` on the `Request` table. All the data in the column will be lost.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `room_id` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `room_number` on the `Room` table. All the data in the column will be lost.
  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Agent_profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Bed_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Booking_detail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Guest_request` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[roomNumber]` on the table `Room` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `requestName` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestPrice` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestType` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agent_profile" DROP CONSTRAINT "Agent_profile_agentId_fkey";

-- DropForeignKey
ALTER TABLE "Booking_detail" DROP CONSTRAINT "Booking_detail_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Booking_detail" DROP CONSTRAINT "Booking_detail_userId_fkey";

-- DropForeignKey
ALTER TABLE "Guest_request" DROP CONSTRAINT "Guest_request_bookingDetailId_fkey";

-- DropForeignKey
ALTER TABLE "Guest_request" DROP CONSTRAINT "Guest_request_requestId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_roomTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_statusId_fkey";

-- DropForeignKey
ALTER TABLE "Room_images" DROP CONSTRAINT "Room_images_roomTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Room_type" DROP CONSTRAINT "Room_type_bedTypeId_fkey";

-- DropForeignKey
ALTER TABLE "User_profile" DROP CONSTRAINT "User_profile_userId_fkey";

-- DropIndex
DROP INDEX "Room_room_number_key";

-- AlterTable
ALTER TABLE "Agents" DROP CONSTRAINT "Agents_pkey",
DROP COLUMN "agent_id",
ADD COLUMN     "agentId" SERIAL NOT NULL,
ADD CONSTRAINT "Agents_pkey" PRIMARY KEY ("agentId");

-- AlterTable
ALTER TABLE "Request" DROP CONSTRAINT "Request_pkey",
DROP COLUMN "request_id",
DROP COLUMN "request_name",
DROP COLUMN "request_price",
DROP COLUMN "request_type",
ADD COLUMN     "requestId" SERIAL NOT NULL,
ADD COLUMN     "requestName" TEXT NOT NULL,
ADD COLUMN     "requestPrice" INTEGER NOT NULL,
ADD COLUMN     "requestType" TEXT NOT NULL,
ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("requestId");

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "room_id",
DROP COLUMN "room_number",
ADD COLUMN     "roomId" SERIAL NOT NULL,
ADD COLUMN     "roomNumber" INTEGER NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("roomId");

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "userId" SERIAL NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "Agent_profile";

-- DropTable
DROP TABLE "Bed_types";

-- DropTable
DROP TABLE "Booking_detail";

-- DropTable
DROP TABLE "Guest_request";

-- DropTable
DROP TABLE "Room_images";

-- DropTable
DROP TABLE "Room_status";

-- DropTable
DROP TABLE "Room_type";

-- DropTable
DROP TABLE "User_profile";

-- CreateTable
CREATE TABLE "UserProfile" (
    "userProfileId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idNumber" INTEGER NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "cardNumber" INTEGER NOT NULL,
    "cardOwner" TEXT NOT NULL,
    "cardExpiry" TEXT NOT NULL,
    "profilePicUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("userProfileId")
);

-- CreateTable
CREATE TABLE "AgentProfile" (
    "agentProfileId" SERIAL NOT NULL,
    "agentId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,

    CONSTRAINT "AgentProfile_pkey" PRIMARY KEY ("agentProfileId")
);

-- CreateTable
CREATE TABLE "RoomType" (
    "roomTypeId" SERIAL NOT NULL,
    "roomTypeName" TEXT NOT NULL,
    "bedTypeId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "roomAmenities" TEXT NOT NULL,
    "guestCapacity" INTEGER NOT NULL,
    "roomSize" INTEGER NOT NULL,
    "roomSrice" INTEGER NOT NULL,

    CONSTRAINT "RoomType_pkey" PRIMARY KEY ("roomTypeId")
);

-- CreateTable
CREATE TABLE "RoomImages" (
    "room_image_id" SERIAL NOT NULL,
    "roomTypeId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "RoomImages_pkey" PRIMARY KEY ("room_image_id")
);

-- CreateTable
CREATE TABLE "BedTypes" (
    "bedTypeId" SERIAL NOT NULL,
    "bedTypeName" TEXT NOT NULL,

    CONSTRAINT "BedTypes_pkey" PRIMARY KEY ("bedTypeId")
);

-- CreateTable
CREATE TABLE "RoomStatus" (
    "statusId" SERIAL NOT NULL,
    "statusName" TEXT NOT NULL,

    CONSTRAINT "RoomStatus_pkey" PRIMARY KEY ("statusId")
);

-- CreateTable
CREATE TABLE "BookingDetail" (
    "bookingDetailId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "checkIn" TEXT NOT NULL,
    "checkOut" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "BookingDetail_pkey" PRIMARY KEY ("bookingDetailId")
);

-- CreateTable
CREATE TABLE "GuestRequest" (
    "guestRequestId" SERIAL NOT NULL,
    "bookingDetailId" INTEGER NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "GuestRequest_pkey" PRIMARY KEY ("guestRequestId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_idNumber_key" ON "UserProfile"("idNumber");

-- CreateIndex
CREATE UNIQUE INDEX "AgentProfile_agentId_key" ON "AgentProfile"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "AgentProfile_phoneNumber_key" ON "AgentProfile"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "RoomType_roomTypeName_key" ON "RoomType"("roomTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "BedTypes_bedTypeName_key" ON "BedTypes"("bedTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomNumber_key" ON "Room"("roomNumber");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentProfile" ADD CONSTRAINT "AgentProfile_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agents"("agentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomType" ADD CONSTRAINT "RoomType_bedTypeId_fkey" FOREIGN KEY ("bedTypeId") REFERENCES "BedTypes"("bedTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomImages" ADD CONSTRAINT "RoomImages_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("roomTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "RoomType"("roomTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "RoomStatus"("statusId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetail" ADD CONSTRAINT "BookingDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingDetail" ADD CONSTRAINT "BookingDetail_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestRequest" ADD CONSTRAINT "GuestRequest_bookingDetailId_fkey" FOREIGN KEY ("bookingDetailId") REFERENCES "BookingDetail"("bookingDetailId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestRequest" ADD CONSTRAINT "GuestRequest_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request"("requestId") ON DELETE RESTRICT ON UPDATE CASCADE;
