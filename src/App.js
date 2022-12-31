import Home from "./Home";
import Teaching from "./Teaching";
import React from "react";
import '../src/assets/tailwind.css'
import { Routes, Route } from "react-router-dom";
import Background from "./Background";

export default function App() {
  return(
    <div className="bg-gradient-to-r from-green-300 to-blue-400">
      <Background/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teaching" element={<Teaching/>}/>
      </Routes>
    </div>
  )

}
