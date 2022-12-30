import Home from "./Home";
import Teaching from "./Teaching";
import React from "react";
import '../src/assets/tailwind.css'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teaching" element={<Teaching/>}/>
      </Routes>
    </>
  )

}
