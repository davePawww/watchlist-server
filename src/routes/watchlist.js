import express from "express";
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("Hello Watchlist!");
});

router.get("/all", (req, res) => {
  res.send("Get all watchlist items");
});

router.post("/create", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.post("/clearWatchlist", (req, res) => {});

export default router;
