import React from "react";
import { Route, Routes as BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Pan from "../pages/Pan";

const RoutesTo = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/pan" element={<Pan />} />
    </BrowserRouter>
  );
};

export default RoutesTo;
