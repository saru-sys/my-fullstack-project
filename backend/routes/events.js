const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (err) {
    res.status(500).send({ error: "Cannot fetch events" });
  }
});

module.exports = router;
