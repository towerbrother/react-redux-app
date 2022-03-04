import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
