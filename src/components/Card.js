import React from "react";
import profile from "../images/memoji.PNG"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

function Card()
{
    return (
        <div className = "w-full">
            <div className = "flex flex-col justify-center max-w-xs mx-auto bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10 rounded-xl p-5">
                <div className = "">
                    <img className = "w-32 mx-auto shadow-xl rounded-full drop-shadow-sm dark:shadow-gray-100/10" src = {profile} alt = "profile photo"></img>
                </div>
                <div className = "text-center mt-5">
                    <p className = "text-xl sm:text-2xl text-gray-900 dark:text-gray-100 font-bold">Brandon Pyle</p>
                    <p className = "text-xs sm:text-base text-gray-600 dark:text-gray-400 pt-2 pb-4 px-5 mx-5 w-auto inline-block border-b-2 dark:border-gray-400">Aspiring Software / Web Developer</p>
                </div>
                    <div className = "flex align-center justify-center mt-4">
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors duration-300 rounded-full" href = "https://www.github.com/bpyle02">
                            <FaGithub />
                            <span className = "sr-only">Github</span>
                        </a>
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors duration-300 rounded-full" href = "https://www.instagram.com/b.pyle02">
                            <FaInstagram />
                            <span className = "sr-only">Instagram</span>
                        </a>
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-twitter hover:bg-twitter hover:text-white transition-colors duration-300 rounded-full" href = "https://www.instagram.com/b.pyle02">
                            <FaTwitter />
                            <span className = "sr-only">Twitter</span>
                        </a>
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors duration-300 rounded-full" href = "mailto:mail4brando@gmail.com">
                            <FaEnvelope />
                            <span className = "sr-only">Email</span>
                        </a>
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-linkedin hover:bg-linkedin hover:text-white transition-colors duration-300 rounded-full" href = "https://www.linkedin.com/in/brandon-pyle">
                            <FaLinkedin />
                            <span className = "sr-only">LinkedIn</span>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Card;