import '../src/assets/tailwind.css'
import Home from "./Home";
import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Projectss from "./components/Projectss";
import Tutoring from './components/Tutoring';

const colorDict = ["bg-red-400", "bg-orange-500", "bg-amber-300", "bg-lime-600","bg-teal-600", "bg-cyan-500", "bg-blue-400", "bg-violet-300", "bg-fuchsia-500", "bg-pink-400" ];

const App = () => {
  const [appColor, setAppColor] = useState(colorDict[Math.floor(Math.random() * 10)]);
  return (
    <Routes>
      <Route path="/" element={<Home color={appColor}/>} />
      <Route path="/projects" element={<Projectss color={appColor}/>} />
      <Route path="/tutoring" element={<Tutoring color={appColor}/>} />
    </Routes>
  )

}

export default App;