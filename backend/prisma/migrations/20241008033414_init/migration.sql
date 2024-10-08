/*
  Warnings:

  - You are about to alter the column `rate` on the `CatSitter` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the `Availability` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "BookingStatus" ADD VALUE 'CANCELLED';

-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_catSitterId_fkey";

-- AlterTable
ALTER TABLE "CatSitter" ALTER COLUMN "rate" SET DATA TYPE INTEGER;

-- DropTable
DROP TABLE "Availability";

-- CreateTable
CREATE TABLE "availabilities" (
    "id" SERIAL NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "catSitterId" INTEGER NOT NULL,

    CONSTRAINT "availabilities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_catSitterId_fkey" FOREIGN KEY ("catSitterId") REFERENCES "CatSitter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
