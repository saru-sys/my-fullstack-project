import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EventRegister from "./components/EventRegister";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect default path "/" to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event-register/:id" element={<EventRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
