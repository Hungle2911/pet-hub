/*
  Warnings:

  - You are about to drop the column `full_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth0Id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth0Id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_user_name_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "full_name",
DROP COLUMN "password",
DROP COLUMN "user_name",
ADD COLUMN     "auth0Id" TEXT NOT NULL,
ADD COLUMN     "first_name" VARCHAR(60) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(60) NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0Id_key" ON "User"("auth0Id");
