import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/resources").then(res => setResources(res.data));
    axios.get("http://localhost:5000/api/events").then(res => setEvents(res.data));
  }, []);

  const handleRegister = (event) => {
    // Go to registration page for this event
    navigate(`/event-register/${event._id}`, { state: { eventTitle: event.title } });
  };

  return (
    <div className="home-container">
      <header>
        <h1>🎓 Campus Connect Portal</h1>
        <p className="welcome">Welcome, Sarumathi</p>
      </header>

      <section className="section">
        <h2>📚 Study Resources</h2>
        <div className="card-container">
          {resources.map(r => (
            <div className="card" key={r._id}>
              <FaBook size={40} color="#4a90e2" />
              <h3>{r.title}</h3>
              <p>Category: {r.category}</p>
              <p>Uploaded by: {r.uploadedBy?.name}</p>
              <a href={r.fileLink} target="_blank" rel="noreferrer" className="btn">
                View PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>🎉 Upcoming Events</h2>
        <div className="card-container">
          {events.map(event => (
            <div className="card" key={event._id}>
              <FaCalendarAlt size={40} color="#f5a623" />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              <p>Location: {event.location}</p>
              <button className="btn" onClick={() => handleRegister(event)}>
                Register
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
