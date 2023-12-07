import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Payment from "./Payment";
import Home from "./Home";
import Completion from "./Completion";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/completion" element={<Completion />} />
    </Routes>
  </BrowserRouter>
}

export default App;
