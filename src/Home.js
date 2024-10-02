import { useEffect, useState } from "react";
import React from "react";


const colorDict = ["bg-red-600", "bg-orange-500", "bg-amber-300", "bg-lime-600","bg-teal-600", "bg-cyan-500", "bg-blue-600", "bg-violet-500", "bg-fuchsia-700", "bg-pink-600" ];

const Home = () => {
    
    return (

        <div className="flex flex-col h-full">
            <h1 className={`mt-16 mb-36 text-5xl font-bold h-24 tracking-tighter ${colorDict[Math.floor(Math.random() * 10)]}`}>emira shano</h1>
            <div className="flex flex-col h-full justify-between">
                <div className="links flex flex-col ml-2 items-start">
                    <a href="/projects">→ Projects</a>
                    <a href="/tutoring">→ Tutoring</a>
                    <a href="">→ Contact</a>
                    <a href="">→ LinkedIn</a>
                    <a href="">→ Github</a>
                </div>

                {/* <div className="image flex flex-row justify-end">
                    <img onClick={resetNum} className="w-12 mb-2 mr-2" src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-v/black-white/animated/${num}.gif`} alt="" />
                </div> */}
            </div>
        </div>
    )


}
export default Home;