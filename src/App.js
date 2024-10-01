import '../src/assets/tailwind.css'
import Home from "./Home";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Background from "./components/Background";
import Projectss from "./components/Projectss";
import Tutoring from './components/Tutoring';


const App = () => {
  return(
    <div className="bg-gradient-to-r from-green-300 to-blue-400">
      <Background/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projectss/>}/>
        <Route path="/tutoring" element={<Tutoring />} />
      </Routes>
      

    </div>
  )

}

export default App;