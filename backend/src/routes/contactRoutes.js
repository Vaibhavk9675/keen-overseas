import express from "express";

import {
  submitContactForm,
} from "../controllers/contactController.js";

console.log("🔥 CONTACT ROUTES FILE LOADED");

const router = express.Router();

router.post(
  "/contact",
  submitContactForm
);

export default router;