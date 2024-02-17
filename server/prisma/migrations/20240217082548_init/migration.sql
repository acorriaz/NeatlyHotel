/*
  Warnings:

  - You are about to drop the `RoomStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `guest_request` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_statusId_fkey";

-- DropForeignKey
ALTER TABLE "guest_request" DROP CONSTRAINT "guest_request_bookingDetailId_fkey";

-- DropForeignKey
ALTER TABLE "guest_request" DROP CONSTRAINT "guest_request_requestId_fkey";

-- DropTable
DROP TABLE "RoomStatus";

-- DropTable
DROP TABLE "guest_request";

-- DropTable
DROP TABLE "request";

-- CreateTable
CREATE TABLE "Room_status" (
    "status_id" SERIAL NOT NULL,
    "status_name" TEXT NOT NULL,

    CONSTRAINT "Room_status_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "Guest_request" (
    "guest_request_id" SERIAL NOT NULL,
    "bookingDetailId" INTEGER NOT NULL,
    "requestId" INTEGER NOT NULL,

    CONSTRAINT "Guest_request_pkey" PRIMARY KEY ("guest_request_id")
);

-- CreateTable
CREATE TABLE "Request" (
    "request_id" SERIAL NOT NULL,
    "request_type" TEXT NOT NULL,
    "request_name" TEXT NOT NULL,
    "request_price" INTEGER NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("request_id")
);

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Room_status"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest_request" ADD CONSTRAINT "Guest_request_bookingDetailId_fkey" FOREIGN KEY ("bookingDetailId") REFERENCES "Booking_detail"("booking_detail_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest_request" ADD CONSTRAINT "Guest_request_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "Request"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;
