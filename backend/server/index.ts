import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;
const DATABASE_URL = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
process.env.DATABASE_URL = DATABASE_URL;

import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "../routes/userRoutes";
import loginRoutes from "../routes/login";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

const PORT = process.env.PORT || 8070;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // Parsing incoming request bodies URL-encoded form data
app.use(express.json()); // Parsing req body
app.use(cors()); // Enable cross-platform data exchange
app.use(cookieParser());

// Mount all resource routes
app.use("/api", userRoutes);
app.use("/login", loginRoutes);

app.listen(PORT, () => {
  console.log(`Hi, I am listening on port ${PORT}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit();
});