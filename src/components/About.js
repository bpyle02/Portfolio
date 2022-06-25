import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import Resume from "../files/Resume 2021-11.pdf";

function About()
{
    return (
        <div className = "max-w-5xl mt-20 mx-auto">
            <p className = "title">About Me</p>
            <p className = "text-base sm:text-xl text-center text-gray-600 dark:text-gray-400 leading-relaxed">I am finishing my sophomore at Liberty University studying Computer Science.
                I have been programming since I was 12 years old when I learned VisualBasic. Since then, I have gained experience
                in C++, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, React, Angular, and more.
                I love programming apps, games, and websites just like this one. I am currently interested in
                a career as a software or web developer.
            </p>
            <div className = "mt-6 text-center">
                <a href = {Resume} download className = "button ml-4">Download My Resume</a>
            </div>
            <ScrollIntoView selector = "#projects">
                <div className = "mx-auto p-20">
                    <FaChevronDown className = "animate-bounce mx-auto text-3xl text-blue-500" />
                </div>
            </ScrollIntoView>
        </div>
    )
}

export default About;