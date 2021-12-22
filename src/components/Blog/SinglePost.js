import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../../client";
import PortableText from "@sanity/block-content-to-react";
import Header from "../Header";

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState([])
    const [categories, setCategory] = useState([])
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
            {isLoading ? ( <h1>Loading...</h1> ) : (
                <section className = "p-5 pb-20 lg:mx-80 md:mx-16 sm:mx-8">
                    <div className = "flex items-center justify-center">
                        {singlePost.mainImage && singlePost.mainImage.asset && (
                            <img src = {singlePost.mainImage.asset.url} alt = {singlePost.title} title = {singlePost.title} className = "rounded-xl shadow-xl dark:shadow-gray-100/10" />
                            )}
                    </div>
                    <h1 className = "title mt-5 text-left">{singlePost.title}</h1>
                    <p className = "paragraph mt-5 mb-2">By Brandon Pyle</p>
                    <div className = "mb-5">
                        <span className = "font-semibold mr-2 dark:text-gray-100">Tags:</span>
                        {categories.map((category) => (
                            <p className = "font-normal inline-block button cursor-pointer">{category.title}</p>
                            ))}
                    </div>
                    <div className="dark:text-gray-100">
                        <PortableText blocks={singlePost.body} />
                    </div>
                    <button>
                        <Link to = "/blog" className = "button mt-2">Read more articles</Link>
                    </button>
                </section>
            )}
        </div>
    )
}
