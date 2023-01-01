import React from "react";
import projectList from "../projectList";
import Card from "./Card.js";

const Projects = () => {
    return (
        <div className="contentLayer relative flex flex-col items-center justify-around min-h-screen gap-x-56 xl:gap-x-80 w-full">
            <h1 className="text-6xl mt-24 font-bold text-white">Projects</h1>
            {projectList.map((project, i)=> <Card key={i} title={project.title} description={project.description} img={project.img} lang={project.lang} link={project.link} />)}
        </div>
    )
}

export default Projects;
