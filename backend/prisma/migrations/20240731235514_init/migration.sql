/*
  Warnings:

  - Added the required column `location` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `full_name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "description" TEXT,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ALTER COLUMN "full_name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "CatOwner" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CatOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CatSitter" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "experience" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CatSitter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "photo" TEXT,
    "medicalHistory" TEXT,
    "behavior" TEXT,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "catSitterId" INTEGER NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" "BookingStatus" NOT NULL,
    "catOwnerId" INTEGER NOT NULL,
    "catSitterId" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CatOwner_userId_key" ON "CatOwner"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CatSitter_userId_key" ON "CatSitter"("userId");

-- AddForeignKey
ALTER TABLE "CatOwner" ADD CONSTRAINT "CatOwner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatSitter" ADD CONSTRAINT "CatSitter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "CatOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_catSitterId_fkey" FOREIGN KEY ("catSitterId") REFERENCES "CatSitter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_catOwnerId_fkey" FOREIGN KEY ("catOwnerId") REFERENCES "CatOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_catSitterId_fkey" FOREIGN KEY ("catSitterId") REFERENCES "CatSitter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
