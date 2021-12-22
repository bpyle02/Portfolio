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
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-16">
                {projects.map((project) => (
                    <article className = "rounded-xl max-w-sm  bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                        <img src={project.mainImage.asset.url} alt={project.title} className = "object-fill object-center rounded-t-xl" />
                        <div className = "p-6">
                            <p className = "text-base font-medium mb-1">{new Date(project.date).toLocaleDateString()}</p>
                            <p className = "text-2xl font-semibold mb-3 dark:text-gray-100">{project.title}</p>
                            {/* <p className = "text-base font-medium mb-1">{project.projectType} Project</p> */}
                            <p className = "leading-relaxed mb-3">{project.description}</p>
                            <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
                                <a href = {project.code} className = "button-main items-center">Code</a>
                                <a href = {project.demo} className = "button-main items-center">Live Demo</a>
                            </div>
                        </div>
                    </article>
                ))}

                    {/* <div className="rounded-xl max-w-sm  bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                        <img src = {rpiGameConsole} className = "object-fill object-center rounded-t-xl" />
                        <div className = "p-6 dark:text-gray-100">
                            <h2 className = "text-base font-medium mb-1">August 13, 2021</h2>
                            <h1 className = "text-2xl font-semibold mb-3">Portable Raspberry Pi Game Console</h1>
                            <p className = "leading-relaxed mb-3">I built this retro game console from scratch using a Raspberry Pi 4 running RetroPie, a 5" display, a 3D printed case a Teensy to control the 16 buttons and 2 joysticks, and more.</p>
                            <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
                                 <a href = "https://github.com/bpyle02/portfolio" className = "button-main items-center">Code</a>
                                 <a href = "https://bpyle02.github.io/portfolio/" className = "button-main items-center">Live Demo</a>
                             </div>
                         </div>
                    </div>
                    <div className="rounded-xl max-w-sm  bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                        <img src = {portfolio} className = "object-fill object-center rounded-t-xl" />
                        <div className = "p-6 dark:text-gray-100">
                            <h2 className = "text-base font-medium mb-1">December 7, 2021</h2>
                            <h1 className = "text-2xl font-semibold mb-3">My Portfolio</h1>
                            <p className = "leading-relaxed mb-3">My online Resume, which was built using React and Tailwind. This site also features a blog and a photo gallery.</p>
                            <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
                                <a href = "https://github.com/bpyle02/portfolio" className = "button-main items-center">Code</a>
                                <a href = "https://bpyle02.github.io/portfolio/" className = "button-main items-center">Live Demo</a>
                            </div>
                         </div>
                    </div>
                    <div className="rounded-xl max-w-sm  bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                        <img src = "https://picsum.photos/id/188/720/400" className = "object-fill object-center rounded-t-xl" />
                        <div className = "p-6 dark:text-gray-100">
                            <h2 className = "text-base font-medium mb-1">December 7, 2021</h2>
                            <h1 className = "text-2xl font-semibold mb-3">C++ Encrypted Loging System</h1>
                            <p className = "leading-relaxed mb-3">This project is an example of an encrypted login / signup system. The user is able to create a username and password, which is encrypted and stored in a text file. To login, the user enters his/her credentials and then the program decrypts the text file and looks for the matching credentials.</p>
                            <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
                                <a href = "https://github.com/bpyle02/portfolio" className = "button-main items-center">Code</a>
                                <a href = "https://bpyle02.github.io/portfolio/" className = "button-main items-center">Live Demo</a>
                             </div>
                         </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Projects;