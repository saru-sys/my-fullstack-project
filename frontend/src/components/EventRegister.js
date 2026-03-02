import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function EventRegister() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const eventTitle = location.state?.eventTitle || "Event";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:5000/api/events/${id}/register`,
        { name, email }
      );

      setSuccess(true);   // Show success message
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register for: {eventTitle}</h2>

      {!success ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h3 style={{ color: "green" }}>
            ✅ Successfully Registered!
          </h3>

          <button onClick={() => navigate("/home")}>
            Back to Home
          </button>
        </>
      )}
    </div>
  );
}
