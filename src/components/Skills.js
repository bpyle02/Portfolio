import React from "react";
import { FaAngular, FaReact } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiNextdotjs } from "react-icons/si"
import { FcLinux } from "react-icons/fc"
 
function Skills()
{
    return (
        <div className = "max-w-4xl mx-auto text-center py-12" id = "tech">
            <p className = "text-2xl text-black dark:text-gray-100 sm:text-4xl pt-20 font-bold">Skills</p>

            <div className = "flex flex-wrap justify-center pt-2">
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-gray-100/10 rounded-xl sm:w-52">
                    <SiCplusplus color = "#5C8DBC" className = "mx-auto text-4xl"/>
                    <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center dark:text-gray-100">C++</p>
                </div>
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-gray-100/10 rounded-xl sm:w-52">
                    <SiJavascript color = "#F0DB4F" className = "mx-auto text-4xl"/>
                    <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center dark:text-gray-100">JavaScript</p>
                </div>
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-gray-100/10 rounded-xl sm:w-52">
                    <FaReact color = "#61DAFB" className = "mx-auto text-4xl"/>
                    <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center dark:text-gray-100">React</p>
                </div>
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-gray-100/10 rounded-xl sm:w-52">
                    <FaAngular color = "#DD0031" className = "mx-auto text-4xl"/>
                    <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center dark:text-gray-100">Angular</p>
                </div>
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-gray-100/10 rounded-xl sm:w-52">
                    <SiNextdotjs className = "mx-auto text-4xl text-black dark:text-gray-100"/>
                    <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center dark:text-gray-100">Next.js</p>
                </div>
                <div className = "flex flex-col w-40 p-10 m-6 overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl dark:shadow-gray-100/10 rounded-xl sm:w-52">
                    <FcLinux color = "#DD0031" className = "mx-auto text-4xl"/>
                    <p className = "mt-6 text-xl sm:text-2xl font-semibold text-center dark:text-gray-100">Linux</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;