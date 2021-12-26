import React from "react";
import { useState, useEffect } from "react"

import client from "../client";
 
function Projects()
{
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        client.fetch(
        `*[_type == "project"] {
            title,
            date,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt,
            },
            description,
            projectType,
            code,
            demo,
            tags
        }`
        )
        .then((data) => setProjects(data))
        .catch((console.error))
    }, [])

    return (
        <div className="min-h-screen" id = "projects">
            <p className = "text-center text-2xl text-black dark:text-gray-100 sm:text-4xl pt-32 pb-20 font-bold">Projects</p>
            <div className = "flex items-center justify-center">
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-14">
                {projects.map((project) => (
                    <article className = "rounded-xl max-w-sm bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                        <img src={project.mainImage.asset.url} alt={project.title} className = "object-fill object-center rounded-t-xl" />
                        <div className = "p-6">
                            <p className = "text-base font-medium mb-1">{new Date(project.date).toLocaleDateString()}</p>
                            <p className = "text-2xl font-semibold mb-3 dark:text-gray-100">{project.title}</p>
                            {/* <p className = "text-base font-medium mb-1">{project.projectType} Project</p> */}
                            <p className = "leading-relaxed mb-3 dark:text-gray-100">{project.description}</p>
                            <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
                                <a href = {project.code} className = "button-main items-center">Code</a>
                                <a href = {project.demo} className = "button-main items-center">Live Demo</a>
                            </div>
                        </div>
                    </article>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;