import React from "react";
import "./app.scss";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./pages/Cv";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/buunhut" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
