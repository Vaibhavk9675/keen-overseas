import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";

console.log("🔥 SERVER STARTED");

dotenv.config();

const app = express();

// DB connect MUST happen first
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

