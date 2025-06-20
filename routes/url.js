const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const validator = require("validator");
const Url = require("../models/Url");

// POST /shorten
router.post("/shorten", async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: "URL is required" });

  if (!validator.isURL(url)) {
    return res.status(400).json({ error: "Invalid URL format" });
  }

  const shortId = nanoid(7);
  await Url.create({ shortId, longUrl: url }); // longUrl must match model

  res.json({
    shortUrl: `https://url-shortner-e9km.onrender.com/${shortId}`
    // Or use https://short.ly/${shortId} if needed for submission format
  });
});

// GET /:code
router.get("/:code", async (req, res) => {
  const { code } = req.params;

  const entry = await Url.findOne({ shortId: code });
  if (!entry) return res.status(404).send("Short URL not found");

  res.redirect(entry.longUrl);
});

module.exports = router;
