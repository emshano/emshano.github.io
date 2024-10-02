import React from "react";
import projectList from "../projectList";
import Card from "./Card.js";

const Projects = () => {
    return (
        <div className="flex flex-col h-full">
            <h1 className="mt-36 mb-36 text-5xl bg-yellow-300 h-24 tracking-tighter">emira shano</h1>
            <div className="flex flex-col h-full justify-between">
                <div className="links flex flex-col ml-2 items-start">
                    {projectList.map((project, i) => <Card key={i} title={project.title} description={project.description} img={project.img} link={project.link} />)}
                </div>

                <div className="image flex flex-row justify-end">
                    <img className="w-12" src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projects;
