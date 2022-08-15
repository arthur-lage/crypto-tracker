import React, { useEffect } from "react";
import { api } from "./services/api";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CoinPage } from "./pages/CoinPage";
import { SearchPage } from "./pages/SearchPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coins/:query" element={<CoinPage />} />
      <Route path="/search/:query" element={<SearchPage />} />
    </Routes>
  );
}
