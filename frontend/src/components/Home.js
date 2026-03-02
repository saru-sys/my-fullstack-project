import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resResources = await axios.get("http://localhost:5000/api/resources");
      setResources(resResources.data);

      const resEvents = await axios.get("http://localhost:5000/api/events");
      setEvents(resEvents.data);

      // Filter only events that have registrations
      const registered = resEvents.data.filter(
        event => event.registrations && event.registrations.length > 0
      );

      setRegisteredEvents(registered);

    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleRegister = (event) => {
    navigate(`/event-register/${event._id}`, {
      state: { eventTitle: event.title }
    });
  };

  return (
    <div className="home-container">

      <header>
        <h1>🎓 Student Study Resources & Events Portal</h1>
        <p className="welcome">Welcome, Sarumathi</p>
      </header>

      {/* Study Resources */}
      <section className="section">
        <h2>📚 Study Resources</h2>
        <div className="card-container">
          {resources.map(resource => (
            <div className="card" key={resource._id}>
              <FaBook size={40} color="#4a90e2" />
              <h3>{resource.title}</h3>
              <p>Category: {resource.category}</p>
              <a
                href={resource.fileLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
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
              <button
                className="btn"
                onClick={() => handleRegister(event)}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Registered Events */}
      <section className="section">
        <h2>✅ My Registered Events</h2>
        <div className="card-container">
          {registeredEvents.length === 0 ? (
            <p>No events registered yet.</p>
          ) : (
            registeredEvents.map(event => (
              <div className="card" key={event._id}>
                <h3>{event.title}</h3>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Location: {event.location}</p>
              </div>
            ))
          )}
        </div>
      </section>

    </div>
  );
}
