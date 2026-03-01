const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  title: String,
  category: String,
  fileLink: String,
  uploadedBy: { name: String }
});

module.exports = mongoose.model("Resource", ResourceSchema);
