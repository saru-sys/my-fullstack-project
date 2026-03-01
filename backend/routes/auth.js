const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send({ error: "User already exists" });

    const user = new User({ name, email, password });
    await user.save();

    res.send({ message: "Signup successful" });
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send({ error: "All fields are required" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ error: "User not found" });
    if (user.password !== password) return res.status(400).send({ error: "Incorrect password" });

    // For demo, we send simple token (in real apps, use JWT)
    const token = "dummy-token";

    res.send({ message: "Login successful", token, name: user.name });
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
});

module.exports = router;
