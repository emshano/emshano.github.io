import React from "react";
import projectList from "../projectList";
import Card from "./Card.js";
import Banner from "./Banner.js";


const Projects = ({color}) => {
    return (
        <div className="flex flex-col h-full ">
            <Banner color={color}/>
            <h2 className="text-6xl ml-2 mb-3">projects</h2>
            <div className="links flex flex-col items-start text-4xl">
                {projectList.map((project, i) => <Card key={i} color={color} title={project.title} description={project.description} link={project.link} />)}
            </div>
        </div>
    )
}

export default Projects;
