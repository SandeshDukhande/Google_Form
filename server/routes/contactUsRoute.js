import express from "express";
import RequestCallback from "../models/contactUsModel.js";

const router = express.Router();

router.post("/addData", async (req, res) => {
  const { name, phoneNumber, email, location, description } = req.body;

  if (!name || !phoneNumber || !email || !location || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newRequestCallback = new RequestCallback({
      name,
      phoneNumber,
      email,
      location,
      description,
    });

    const savedRequestCallback = await newRequestCallback.save();
    res.status(201).json(savedRequestCallback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/getALLData", async (req, res) => {
  try {
    const requestCallbacks = await RequestCallback.find();
    res.status(200).json(requestCallbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
