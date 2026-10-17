import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Pan from "../pages/pan/Pan.jsx";
import Pasteles from "../pages/pasteles/Pasteles.jsx";
import HotDrinks from "../pages/hot-drinks/HotDrinks.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pan" element={<Pan />} />
      <Route path="/pasteles" element={<Pasteles />} />
      <Route path="/hot-drinks" element={<HotDrinks />} />
    </Routes>
  );
};

export default AppRoutes;
