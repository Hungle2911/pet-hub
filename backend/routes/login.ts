import express, { Request, Response } from "express";

const router = express.Router();

router.get("/:id", (req: Request, res: Response) => {
  // set a cookie as a string value
  res.cookie("user_id", req.params.id);
  // redirect to dashboard?
  res.redirect("/owner-page");
});

export default router;
