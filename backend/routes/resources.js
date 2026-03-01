const express = require("express");
const router = express.Router();
const Resource = require("../models/Resource");

// GET all resources
router.get("/", async (req, res) => {
  try {
    const resources = await Resource.find();
    res.send(resources);
  } catch (err) {
    res.status(500).send({ error: "Cannot fetch resources" });
  }
});

module.exports = router;

