import React from "react";
import { useState, useEffect } from "react"

import Footer from "../Footer";
import Header from "./Header";

import client from "../../client"
import BlockContent from "@sanity/block-content-to-react";

import { Link } from "react-router-dom";

const Blog = () =>
{
    const [posts, setPosts] = useState([])
    const [categories, setCategory] = useState([])
    
    useEffect(() => {
        client.fetch(
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

    useEffect(() => {
        client
        .fetch(
            `*[_type == "category"] {
            title,
        }`
        )
        .then((data) => setCategory(data))
        .catch(console.error)
    }, [])

    return (
        <div className = "bg-gray-100 dark:bg-zinc-900">
            <Header />
            <div className = "" >
                <p className = "title pt-32">Welcome to My Blog!</p>
                <div className = "flex items-center justify-center mt-16">
                    <div className = "grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10 mx-16">
                    {posts.map((post) => (
                        <article key={post.slug.current} className = "rounded-xl max-w-sm bg-white dark:bg-zinc-950 shadow-xl dark:shadow-gray-100/10">
                            <img src={post.mainImage.asset.url} alt={post.title} className = "object-fill object-center rounded-t-xl" />
                            <div className = "p-6">
                                <p className = "text-2xl font-semibold mb-3 dark:text-gray-100">{post.title}</p>
                                {categories.map((category) => (
                                    <div className = "inline-block">                                    
                                        <p className = "px-2 inline-flex mb-2 mr-2 rounded-2xl hover:bg-white bg-gray-100 dark:hover:bg-zinc-950 dark:bg-zinc-800 dark:text-white duration-300 transition-colors cursor-pointer">{category.title}</p>
                                    </div>
                                ))}
                                <div class = "preview">
                                    <BlockContent blocks={post.body} projectId="2hp9gld0" dataset="production" />
                                </div>
                                <button className="button-main items-center mt-2 dark:text-gray-100 block">
                                    <Link to = {`/blog/${post.slug.current}`} className = "">Read Full Article</Link>
                                </button>
                            </div>
                        </article>
                    ))}
                    </div>
                </div>
            </div>
            <div className = "pb-10 bg-gray-100 dark:bg-zinc-900">
                <Footer />
            </div>
        </div>
    )
}

export default Blog;