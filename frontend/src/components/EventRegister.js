import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function EventRegister() {
  const location = useLocation();
  const { eventTitle } = location.state || { eventTitle: "Event" };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only, no backend yet
    setMessage(`Successfully registered for "${eventTitle}"! 🎉`);
    setName("");
    setEmail("");
  };

  return (
    <div className="auth-container">
      <h2>Register for {eventTitle}</h2>
      {!message ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      ) : (
        <p style={{ fontSize: "18px", marginTop: "20px" }}>{message}</p>
      )}
    </div>
  );
}
