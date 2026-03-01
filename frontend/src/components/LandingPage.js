import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>🎓 Campus Connect Portal</h1>
        <p>Your one-stop portal for study materials, PDFs & campus events</p>
        <div className="hero-buttons">
          <button className="btn login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="btn signup-btn" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </div>
      </div>
      <div className="landing-footer">
        <p>© 2026 Campus Connect. All rights reserved.</p>
      </div>
    </div>
  );
}
