import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Pan from "../pages/pan/Pan.jsx";
import Pasteles from "../pages/pasteles/Pasteles.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pan" element={<Pan />} />
      <Route path="/pasteles" element={<Pasteles />} />
    </Routes>
  );
};

export default AppRoutes;
