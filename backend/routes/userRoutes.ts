import express, { Request, Response } from "express";
import prisma from "../server/configs/index";

const router = express.Router();

router.post("/userinfo", async (req: Request, res: Response) => {
  const { name, email, age, username, role, breed, bio } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        age,
        username,
        role,
        breed,
        bio,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

export default router;
