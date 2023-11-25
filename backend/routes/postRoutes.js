import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

const router = express.Router();

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: true, message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({ name, prompt, photo: photoUrl.url });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
