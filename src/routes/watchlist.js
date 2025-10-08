import express from "express";
const router = express.Router();
import { db } from "../db/index.js";
import { watchListsTable } from "../db/schema.js";

router.get("/all", async (req, res) => {
  try {
    const watchlists = await db.select().from(watchListsTable);
    res.status(200).json(watchlists);
  } catch (error) {
    console.error("Error fetching watchlists:", error);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
});

router.get("/:id", (req, res) => {
  res.send("Hello Watchlist!");
});

router.post("/create", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.post("/clearWatchlist", (req, res) => {});

export default router;
