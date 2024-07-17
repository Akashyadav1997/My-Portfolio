import express from "express";
import { contact, hireMe } from "../controllers/applicant.js";
import { hireMeValidator, validateHandler } from "../utils/validator.js";

const router = express.Router();

router.post("/hireme", hireMeValidator(), validateHandler, hireMe);
router.post("/contact", contact);
export default router;
