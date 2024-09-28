import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Final from "./pages/DashBoard/Final";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Final />} />
      </Routes>
  );
};

export default App;
