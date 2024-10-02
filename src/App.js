import '../src/assets/tailwind.css'
import Home from "./Home";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Projectss from "./components/Projectss";
import Tutoring from './components/Tutoring';

const colorDict = ["bg-red-600", "bg-orange-500", "bg-amber-300", "bg-lime-600","bg-teal-600", "bg-cyan-500", "bg-blue-600", "bg-violet-500", "bg-fuchsia-700", "bg-pink-600" ];

const App = () => {
  const [appColor, setAppColor] = useState(colorDict[Math.floor(Math.random() * 10)]);
  return (
    <Routes>
      <Route path="/" element={<Home color={appColor}/>} />
      <Route path="/projects" element={<Projectss color={appColor}/>} />
      <Route path="/tutoring" element={<Tutoring />} />
    </Routes>
  )

}

export default App;