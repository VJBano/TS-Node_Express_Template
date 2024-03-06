import express from "express";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

//do something here

export default router;