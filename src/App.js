import '../src/assets/tailwind.css'
import Home from "./Home";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Projectss from "./components/Projectss";
import Tutoring from './components/Tutoring';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projectss />} />
      <Route path="/tutoring" element={<Tutoring />} />
    </Routes>
  )

}

export default App;