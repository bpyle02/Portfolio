import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../../client";
//import BlockContent from "@sanity/block-content-to-react";
import Header from "../Header";

export default function SinglePost() {
    const BlockContent = require('@sanity/block-content-to-react')
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()

    useEffect(() => {
        client
          .fetch(
            `*[slug.current == "${slug}"] {
            title,
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
          .then((data) => setSinglePost(data[0]))
        setIsLoading(false)
    }, [slug])

    return (
        <div className = "bg-gray-100 dark:bg-zinc-900">
            <Header />
            {isLoading ? ( <h1>Loading...</h1> ) : (
                <section className = "p-5 pb-20 lg:mx-28 md:mx-16 sm:mx-8">
                    <h1 className = "title mb-20">{singlePost.title}</h1>
                    <div className = "flex items-center justify-center">
                        {singlePost.mainImage && singlePost.mainImage.asset && (
                            <img src = {singlePost.mainImage.asset.url} alt = {singlePost.title} title = {singlePost.title} className = "rounded-xl shadow-xl dark:shadow-gray-100/10" />
                            )}
                    </div>
                    <p className = "paragraph mt-5 mb-5">By Brandon Pyle</p>
                    <div className="paragraph">
                        <BlockContent blocks={singlePost.body} projectId="2hp9gld0" dataset="production" />
                    </div>
                    <button>
                        <Link to = "/blog" className = "button">Read more articles</Link>
                    </button>
                </section>
            )}
        </div>
    )
}
