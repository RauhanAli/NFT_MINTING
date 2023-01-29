import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/home";
import NFT from "./pages/mint";
function App() {
  return (
    <>
     <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mint" element={<NFT />} />
    

    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
