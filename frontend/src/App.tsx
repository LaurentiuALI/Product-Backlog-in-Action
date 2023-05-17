// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import AlphaItem from "./pages/AlphaItem/AlphaItem";
import { Home } from "./pages/Home/organisms/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<AlphaItem />} />
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
