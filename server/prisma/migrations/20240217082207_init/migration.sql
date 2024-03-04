/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "User_profile" (
    "user_profile_id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "id_number" INTEGER NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "card_number" INTEGER NOT NULL,
    "card_owner" TEXT NOT NULL,
    "card_expiry" TEXT NOT NULL,
    "profile_pic" TEXT NOT NULL,

    CONSTRAINT "User_profile_pkey" PRIMARY KEY ("user_profile_id")
);

-- CreateTable
CREATE TABLE "Agents" (
    "agent_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Agents_pkey" PRIMARY KEY ("agent_id")
);

-- CreateTable
CREATE TABLE "Agent_profile" (
    "agent_profile_id" SERIAL NOT NULL,
    "agentId" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,

    CONSTRAINT "Agent_profile_pkey" PRIMARY KEY ("agent_profile_id")
);

-- CreateTable
CREATE TABLE "Room_type" (
    "room_type_id" SERIAL NOT NULL,
    "room_type_name" TEXT NOT NULL,
    "bedTypeId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "room_amenities" TEXT NOT NULL,
    "guest_capacity" INTEGER NOT NULL,
    "room_size" INTEGER NOT NULL,
    "room_price" INTEGER NOT NULL,

    CONSTRAINT "Room_type_pkey" PRIMARY KEY ("room_type_id")
);

-- CreateTable
CREATE TABLE "Room_images" (
    "room_image_id" SERIAL NOT NULL,
    "roomTypeId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Room_images_pkey" PRIMARY KEY ("room_image_id")
);

-- CreateTable
CREATE TABLE "Bed_types" (
    "bed_type_id" SERIAL NOT NULL,
    "bed_type_name" TEXT NOT NULL,

    CONSTRAINT "Bed_types_pkey" PRIMARY KEY ("bed_type_id")
);

-- CreateTable
CREATE TABLE "Room" (
    "room_id" SERIAL NOT NULL,
    "roomTypeId" INTEGER NOT NULL,
    "room_number" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "RoomStatus" (
    "status_id" SERIAL NOT NULL,
    "status_name" TEXT NOT NULL,

    CONSTRAINT "RoomStatus_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "Booking_detail" (
    "booking_detail_id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "payment_method" TEXT NOT NULL,
    "total_price" INTEGER NOT NULL,
    "check_in" TEXT NOT NULL,
    "check_out" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "cancelled_at" TEXT,

    CONSTRAINT "Booking_detail_pkey" PRIMARY KEY ("booking_detail_id")
);

-- CreateTable
CREATE TABLE "guest_request" (
    "guest_request_id" SERIAL NOT NULL,
    "bookingDetailId" INTEGER NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "guest_request_pkey" PRIMARY KEY ("guest_request_id")
);

-- CreateTable
CREATE TABLE "request" (
    "request_id" SERIAL NOT NULL,
    "request_type" TEXT NOT NULL,
    "request_name" TEXT NOT NULL,
    "request_price" INTEGER NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("request_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_userId_key" ON "User_profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_id_number_key" ON "User_profile"("id_number");

-- CreateIndex
CREATE UNIQUE INDEX "Agents_username_key" ON "Agents"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Agents_email_key" ON "Agents"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_profile_agentId_key" ON "Agent_profile"("agentId");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_profile_phone_number_key" ON "Agent_profile"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Room_type_room_type_name_key" ON "Room_type"("room_type_name");

-- CreateIndex
CREATE UNIQUE INDEX "Bed_types_bed_type_name_key" ON "Bed_types"("bed_type_name");

-- CreateIndex
CREATE UNIQUE INDEX "Room_room_number_key" ON "Room"("room_number");

-- AddForeignKey
ALTER TABLE "User_profile" ADD CONSTRAINT "User_profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agent_profile" ADD CONSTRAINT "Agent_profile_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agents"("agent_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_type" ADD CONSTRAINT "Room_type_bedTypeId_fkey" FOREIGN KEY ("bedTypeId") REFERENCES "Bed_types"("bed_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_images" ADD CONSTRAINT "Room_images_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "Room_type"("room_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_roomTypeId_fkey" FOREIGN KEY ("roomTypeId") REFERENCES "Room_type"("room_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "RoomStatus"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking_detail" ADD CONSTRAINT "Booking_detail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking_detail" ADD CONSTRAINT "Booking_detail_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("room_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guest_request" ADD CONSTRAINT "guest_request_bookingDetailId_fkey" FOREIGN KEY ("bookingDetailId") REFERENCES "Booking_detail"("booking_detail_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guest_request" ADD CONSTRAINT "guest_request_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "request"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;
