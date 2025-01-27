// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ShopRegistrationStepper from "./pages/ShopRegistrationStepper";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<ShopRegistrationStepper />} />
      </Routes>
    </Router>
  );
}

export default App;
