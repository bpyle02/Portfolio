import React from "react";
import { useState, useEffect } from "react"

import Footer from "../Footer";
import Header from "./Header";

import client from "../../client"
import { Link } from "react-router-dom";

const Blog = () =>
{
    const [posts, setPosts] = useState([])

    useEffect(() => {
        client
        .fetch(
            `*[_type == "post"] {
            title,
            slug,
            body,
            mainImage {
            asset -> {
                _id,
                url
            },
            alt
            }
        }`
        )
        .then((data) => setPosts(data))
        .catch(console.error)
    }, [])

    return (
        <div className = "bg-gray-100 dark:bg-zinc-900">
            <Header />
            <div className = "" >
                <p className = "text-2xl text-black dark:text-gray-100 sm:text-4xl font-bold text-center pt-32">Welcome to My Blog!</p>
                <div className = "flex items-center justify-center mt-16">
                    <div className = "grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-16">
                    {posts.map((post) => (
                        <article key={post.slug.current} className = "rounded-xl max-w-sm  bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                            <img src={post.mainImage.asset.url} alt={post.title} className = "object-fill object-center rounded-t-xl" />
                            <h4 className="text-2xl font-semibold mb-3 p-6 dark:text-gray-100">{post.title}</h4>
                            <div className = "flex align-center justify-center font-semibold dark:text-gray-100">
                                <button className="button-main items-center m-6 dark:text-gray-100">
                                    <Link to={`/blog/${post.slug.current}`} className = "">Read Full Article</Link>
                                </button>
                            </div>
                        </article>
                    ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog;