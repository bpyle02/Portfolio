import React from "react";
import portfolio from "../images/portfolio.png"
import rpiGameConsole from "../images/raspberry-pi-game-console.jpg"
 
function Projects()
{
    return (
        <div className="min-h-screen" id = "projects">
            <p className = "text-center text-2xl text-black dark:text-gray-100 sm:text-4xl pt-32 pb-20 font-bold">Projects</p>
            <div className = "flex items-center justify-center">
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-16">
                    <div className="rounded-xl max-w-sm  bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
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
                    </div>
                </div>
            </div>
        </div>
        //     {/* <div className = "flex flex-wrap justify-center m-8">
        //         <div className = "p-4 sm:w-1/2 lg:w-[22.5%]">
        //             <div className = "h-full rounded-xl overflow-hidden shadow-2xl dark:shadow-gray-100/10 dark:bg-zinc-950">
        //                 <img src = {rpiGameConsole} className = "lg:h-52 md:h-48 w-full object-contain object-center" />
        //                 <div className = "p-6 dark:text-gray-100">
        //                     <h2 className = "text-base font-medium mb-1">August 13, 2021</h2>
        //                     <h1 className = "text-2xl font-semibold mb-3">Portable Raspberry Pi Game Console</h1>
        //                     <p className = "leading-relaxed mb-3">I built this retro game console from scratch using a Raspberry Pi 4 running RetroPie, a 5" display, a 3D printed case a Teensy to control the 16 buttons and 2 joysticks, and more.</p>
        //                     <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
        //                         <a href = "https://github.com/bpyle02/portfolio" className = "button-main items-center">Code</a>
        //                         <a href = "https://bpyle02.github.io/portfolio/" className = "button-main items-center">Live Demo</a>
        //                     </div>
        //                 </div>
        //             </div>            
        //         </div>
        //         <div className = "p-4 sm:w-1/2 lg:w-[22.5%]">
        //             <div className = "h-full rounded-xl overflow-hidden shadow-2xl dark:shadow-gray-100/10 dark:bg-zinc-950">
        //                 <img src = {portfolio} className = "lg:h-52 md:h-48 w-full object-contain object-center" />
        //                 <div className = "p-6 dark:text-gray-100">
        //                     <h2 className = "text-base font-medium mb-1">December 7, 2021</h2>
        //                     <h1 className = "text-2xl font-semibold mb-3">My Portfolio</h1>
        //                     <p className = "leading-relaxed mb-3">This website is my online portfolio, and I built it using React and Tailwind CSS. These frameworks make it incredibly easy to create beautiful websites like this one.</p>
        //                     <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
        //                         <a href = "https://hackaday.io/project/179756-handheld-raspberry-pi-retro-game-console" className = "items-center button-main">Code</a>
        //                         <a href = "https://youtu.be/3kafVUv4qtQ" className = "items-center button-main">Live Demo</a>
        //                     </div>
        //                 </div>
        //             </div>            
        //         </div>
        //         <div className = "p-4 sm:w-1/2 lg:w-[22.5%]">
        //             <div className = "h-full rounded-xl overflow-hidden shadow-2xl dark:shadow-gray-100/10 dark:bg-zinc-950">
        //                 <img src = "https://picsum.photos/id/188/720/400" className = "lg:h-52 md:h-48 w-full object-contain object-center" />
        //                 <div className = "p-6 dark:text-gray-100">
        //                     <h2 className = "text-base font-medium mb-1">October 29, 2021</h2>
        //                     <h1 className = "text-2xl font-semibold mb-3">C++ Encrypted Loging System</h1>
        //                     <p className = "leading-relaxed mb-3">This project is an example of an encrypted login / signup system. The user is able to create a username and password, which is encrypted and stored in a text file. To login, the user enters his/her credentials and then the program decrypts the text file and looks for the matching credentials.</p>
        //                     <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
        //                         <a href = "https://hackaday.io/project/179756-handheld-raspberry-pi-retro-game-console" className = "items-center button-main">Code</a>
        //                         <a href = "https://hackaday.io/project/179756-handheld-raspberry-pi-retro-game-console" className = "items-center button-main">Live Demo</a>
        //                     </div>
        //                 </div>
        //             </div>            
        //         </div>         
        //     </div>
        // </div> */}
    )
}

export default Projects;