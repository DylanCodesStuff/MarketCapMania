import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home.jsx";
import Show from "./assets/pages/Show.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  </BrowserRouter>
);
