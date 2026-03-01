import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // your existing styles

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo auth using localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("token", "demo-token"); // simple token
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login successful! 🎉");

      // Navigate to Home page after login
      navigate("/home");
    } else {
      alert("Login failed. Check email/password.");
    }
  };

  return (
    <div className="auth-container">
      {/* Portal title */}
      <h1 style={{ marginBottom: "10px", color: "#333", fontSize: "24px" }}>
        🎓 Campus Connect Portal
      </h1>
      <p style={{ marginBottom: "20px", color: "#555", fontSize: "16px" }}>
        Access your campus study resources and register for events
      </p>

      {/* Login form */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign up
        </span>
      </p>
    </div>
  );
}
