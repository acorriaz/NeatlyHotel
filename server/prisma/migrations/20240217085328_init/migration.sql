/*
  Warnings:

  - The `cancelled_at` column on the `Booking_detail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `created_at` on the `Booking_detail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updated_at` on the `Booking_detail` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updated_at` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `User_profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User_profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking_detail" DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "updated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "cancelled_at",
ADD COLUMN     "cancelled_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User_profile" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
