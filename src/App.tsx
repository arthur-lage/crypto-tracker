import React, { useEffect } from "react";
import { api } from "./services/api";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
