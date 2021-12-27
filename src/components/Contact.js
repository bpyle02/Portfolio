import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Contact()
{
    return (
        <div className = "w-full max-w-2xl text-center m-auto pt-52 mb-10">
            <p className = "text-2xl sm:text-4xl pt-20 font-bold dark:text-gray-100">Interested in working together?</p>
            <a href = "mailto:mail4brando@gmail.com">
                <span className = "mt-6 inline-block w-auto bg-black hover:bg-zinc-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black duration-300 transition-colora font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
                    <div className = "flex flex-row items-center">
                        <span className = "mr-3">Get in touch</span>
                        <FaArrowRight />
                    </div>
                </span>
            </a>
        </div>
    )
}

export default Contact;