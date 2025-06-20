const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const Url = require("../models/Url");

// POST: Create short URL
router.post("/shorten", async (req, res) => {
    const { originalUrl } = req.body;
    if (!originalUrl) return res.status(400).json({ error: "originalUrl is required" });

    const shortId = nanoid(6);
    await Url.create({ shortId, originalUrl });

    res.json({ shortUrl: `http://localhost:8000/${shortId}` });
});

// GET: Redirect
router.get("/:shortId", async (req, res) => {
    const { shortId } = req.params;
    const entry = await Url.findOne({ shortId });

    if (!entry) return res.status(404).json({ error: "URL not found" });

    res.redirect(entry.originalUrl);
});

module.exports = router;
