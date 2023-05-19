// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import AlphaItem from "./pages/AlphaItem/AlphaItem";
import { Home } from "./pages/Home/organisms/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useUserStore } from "./stores/UserStore";
// import "./App.css";

function App() {
  const { user } = useUserStore();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/:id"
          element={user ? <AlphaItem /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
