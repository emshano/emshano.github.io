import Home from "./Home";
import About from "./components/About";
import React from "react";
import '../src/assets/tailwind.css'
import { Routes, Route } from "react-router-dom";
import Background from "./Background";
import Projectss from "./Projectss";
import Nav from "./components/Nav";

export default function App() {
  return(
    <div className="bg-gradient-to-r from-green-300 to-blue-400">
      <Background/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projectss/>}/>
      </Routes>
    </div>
  )

}
