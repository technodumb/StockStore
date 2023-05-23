import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
