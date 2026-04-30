import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/v1/user", userRoute);

// test route (IMPORTANT for checking server)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// connect DB
connectDB();

// server start
app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});