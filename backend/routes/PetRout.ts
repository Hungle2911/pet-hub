import { Router } from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post("/petinfo", upload.single("photo"), (req, res) => {
  const { petName, breed } = req.body;
  const photo = req.file; 


  res.json({
    message: "Form submitted successfully",
    data: {
      petName,
      breed,
      photo,
    },
  });
});

export default router;
