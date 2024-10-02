import { useEffect, useState } from "react";
import React from "react";

async function fetchpkmn(num) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + num);
    const data = await response.json();
    return data;
}

const colorDict = {
    "yellow": "bg-yellow-500",
    "white": "bg-neutral-300",
    "red": "bg-red-500",
    "purple": "bg-purple-500",
    "pink": "bg-pink-500",
    "green": "bg-green-500",
    "gray": "bg-gray-500",
    "brown": "bg-yellow-900",
    "blue": "bg-blue-500",
    "black": "bg-zinc-900",
}

const Home = () => {

    const [num, setNum] = useState(Math.floor(Math.random() * 350));
    const [bannerColor, setBannerColor] = useState("white");
    const [bannerTextColor, setBannerTextColor] = useState("black");

    useEffect(() => {
        fetchpkmn(num).then(x => {
            setBannerColor(colorDict[x.color.name]);
            if(x.color.name === "black" || x.color.name === "brown" || x.color.name === "gray"){
                setBannerTextColor("text-white");
            }
        });
    })

    const resetNum = () => {
        setNum(Math.floor(Math.random() * 350));
    }
    
    return (

        <div className="flex flex-col h-full">
            { }
            <h1 className={`mt-16 mb-36 text-5xl font-bold h-24 tracking-tighter ${bannerColor} ${bannerTextColor}`}>emira shano</h1>
            <div className="flex flex-col h-full justify-between">
                <div className="links flex flex-col ml-2 items-start">
                    <a href="/projects">→ Projects</a>
                    <a href="/tutoring">→ Tutoring</a>
                    <a href="">→ Contact</a>
                    <a href="">→ LinkedIn</a>
                    <a href="">→ Github</a>
                </div>

                <div className="image flex flex-row justify-end">
                    <img onClick={resetNum} className="w-12 mb-2 mr-2" src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/versions/generation-v/black-white/animated/${num}.gif`} alt="" />
                </div>
            </div>
        </div>
    )


}
export default Home;