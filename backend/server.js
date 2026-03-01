const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/campus_portal")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
const resourceRoutes = require("./routes/resources");
const eventRoutes = require("./routes/events");

app.use("/api/resources", resourceRoutes);
app.use("/api/events", eventRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
