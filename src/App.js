import '../src/assets/tailwind.css'
import Home from "./Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Projectss from "./components/Projectss";

const App = () => {
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

export default App;