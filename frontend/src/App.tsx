// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import AlphaItem from "./pages/AlphaItem/AlphaItem";
import { Home } from "./pages/Home/organisms/Home";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<AlphaItem />} />
      </Routes>
    </div>
  );
}

export default App;
