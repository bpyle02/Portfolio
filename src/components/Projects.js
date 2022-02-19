import React from "react";
import { useState, useEffect } from "react"

import client from "../client";
 
function Projects()
{
    const [projects, setProjects] = useState([]);
    const [sort, setSort] = useState("All")

    useEffect(() => {
        client.fetch(
        `*[_type == "project" && $keyword in tags] {
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
        }`, {"keyword":sort}
        )
        .then((data) => setProjects(data))
        .catch((console.error))
    }, [sort])

    function sortProjects(e) {
        console.log(e)
        setSort(e)
    }

    return (
        <div className="min-h-screen mb-20" id = "projects">
            <p className = "text-center text-2xl text-black dark:text-gray-100 sm:text-4xl pt-32 font-bold">Projects</p>
            <p className = "text-center font-semibold pb-20 mt-4 dark:text-gray-100">Currently showing: {sort} projects</p>
            <div className = "flex items-center justify-center">
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-14">
                {projects.map((project) => (
                    <article className = "rounded-xl max-w-sm bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                        <img src={project.mainImage.asset.url} alt={project.title} className = "object-fill object-center rounded-t-xl" />
                        <div className = "p-6">
                            <p className = "text-base font-medium mb-1 dark:text-gray-100">{new Date(project.date).toLocaleDateString()} - {project.projectType} Project</p>
                            <p className = "text-2xl font-semibold mb-3 dark:text-gray-100">{project.title}</p>
                            {project.tags.map((tags) => (
                                <div className = "inline-block">                                    
                                    <p onClick={() => sortProjects(tags)} className = "px-2 inline-flex mb-2 mr-2 rounded-2xl hover:bg-white bg-gray-100 dark:hover:bg-zinc-950 dark:bg-zinc-800 dark:text-white duration-300 transition-colors cursor-pointer">{tags}</p>
                                </div>
                            ))}
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