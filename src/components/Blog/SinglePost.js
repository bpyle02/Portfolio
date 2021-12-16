import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../../client";

export default function SinglePost() {
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
        <div>
            {isLoading ? ( <h1>Loading...</h1> ) : (
                <section className = "p-5 xl:max-w-6xl xl:mx-auto pb-20">
                    {singlePost.mainImage && singlePost.mainImage.asset && (
                        <img src = {singlePost.mainImage.asset.url} alt = {singlePost.title} title = {singlePost.title} className = "rounded-xl" />
                    )}
                    <h1 className = "font-bold text-2xl mb-10 md:text-6xl lg:text-4xl text-center mt-5">{singlePost.title}</h1>
                    <p>By Brandon Pyle</p>
                    {/* <div className="">
                        <BlockContent
                        blocks={singlePost.body}
                        projectId="2hp9gld0"
                        dataset="production"
                        />
                    </div> */}
                    <button>
                        <Link to = "/blog">Read more articles</Link>
                    </button>
                </section>
            )}
        </div>
    )
}
