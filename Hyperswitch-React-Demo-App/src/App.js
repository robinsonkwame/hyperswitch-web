import "./App.css";
import Payment from "./Payment";
import SignUp from "./Signup"; // Corrected the file name casing to match the actual file
import Completion from "./Completion";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
