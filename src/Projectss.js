
import React, { useEffect } from "react";
import anime from "animejs";
import '../src/assets/tailwind.css'
import projects from "./projects";
import Card from "./components/Card.js";

export default function Projectss() {

    return (
        <div className="contentLayer relative flex flex-col items-center justify-around min-h-screen gap-x-56 xl:gap-x-80 w-full">
            <h1 className="text-6xl mt-24 font-bold text-white">Projects</h1>
            {projects.map((project)=> <Card title={project.title} description={project.description} img={project.img} lang={project.lang} link={project.link} />)}
        </div>
    )


}
