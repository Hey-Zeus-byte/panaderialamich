import React from "react";
import { Route, Routes as BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Pan from "../pages/Pan";
import Pasteles from "../pages/Pasteles";

const RoutesTo = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/pan" element={<Pan />} />
      <Route path="/pasteles" element={<Pasteles />} />
    </BrowserRouter>
  );
};

export default RoutesTo;
