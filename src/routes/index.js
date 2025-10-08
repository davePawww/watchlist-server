import express from "express";
const router = express.Router();
import watchlistRouter from "./watchlist.js";

router.use("/watchlist", watchlistRouter);

export default router;
