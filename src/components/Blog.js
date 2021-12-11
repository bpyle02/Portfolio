import React from "react";

function Blog()
{
    return (
        <div className = "grid place-items-center h-screen dark:bg-black">
            <h1 className = "font-bold text-xl dark:text-gray-100">Blog Coming Soon</h1>
            <div className = "hover:bg-gray-200 dark:hover:bg-gray-900 p-2 m-3 rounded">
                <a href = "/" className = "dark:text-gray-100">Go back</a>
            </div>
        </div>
    )
}

export default Blog;