const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const Url = require("../models/Url");

// POST: Create short URL
router.post("/", async (req, res) => {
    const { longUrl } = req.body;
    const shortId = nanoid(8);

    await Url.create({ shortId, longUrl });
    res.json({ shortId });
});

// GET: Redirect to long URL
router.get("/:shortId", async (req, res) => {
    const { shortId } = req.params;
    const entry = await Url.findOne({ shortId });

    if (!entry) return res.status(404).send("Not found");
    res.redirect(entry.longUrl);
});

module.exports = router;
