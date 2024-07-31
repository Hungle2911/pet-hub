-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'PET_SITTER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_name" VARCHAR(50),
    "full_name" VARCHAR(60),
    "email" VARCHAR(50),
    "password" VARCHAR(255),
    "role" "Role" NOT NULL DEFAULT 'OWNER',
    "refresh_token" VARCHAR(255),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
