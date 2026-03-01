const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String
});

module.exports = mongoose.model("Event", EventSchema);
