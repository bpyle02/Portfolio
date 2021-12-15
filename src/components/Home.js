import React from "react";

import Card from "./Card";
import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Home()
{
    return (
        <div>
            <Header />
            <div className = 'min-h-screen py-10 px-3 sm:px-5 bg-gray-100 dark:bg-zinc-900'>
              <div data-aos = "fade-down" data-aos-duration = "800">
                <Card />
              </div>
              <div data-aos = "fade-up" data-aos-duration = "800" data-aos-delay = "400">
                <About />
              </div>
              {/* <Skills /> */}
              <Projects />
              <Contact />
              <Footer />
            </div>
        </div>
    )
}

export default Home;