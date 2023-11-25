import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

try {
  connectDB(process.env.MONGODB_URL);
} catch (error) {
  console.log("Failed to connect to the databse");
}

const startServer = async () => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log("Server failed to start");
    } else {
      console.log("Server start on port: ", PORT);
    }
  });
};

startServer();
