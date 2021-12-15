import React from "react";

import Footer from "../Footer";
import Header from "./Header";

const Blog = () =>
{
    return (
        <div className = "bg-gray-100 dark:bg-zinc-900">
            <Header />
            <div className = "h-screen" >
                <p className = "text-2xl text-black dark:text-gray-100 sm:text-4xl font-bold text-center pt-32">Welcome to My Blog!</p>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;