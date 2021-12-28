import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import Header from "../Header";

export default function SinglePhoto() {
    const [singlePhoto, setSinglePhoto] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
            title,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            },
            publishedAt,
            }`
          )
          .then((data) => setSinglePhoto(data[0]))
          setIsLoading(false)
    }, [slug])

    return (
        <div className = "bg-gray-100 dark:bg-zinc-900 min-h-screen">
            <Header />
            {isLoading ? ( <h1>Loading...</h1> ) : (
                <section className = "p-5 pb-20 lg:mx-80 md:mx-16 sm:mx-8">
                    <h1 className = "title mt-10 mb-4 text-center">{singlePhoto.title}</h1>
                    <p className = "mb-6 text-center font-semibold dark:text-gray-100">{new Date(singlePhoto.publishedAt).toLocaleDateString()}</p>
                    <div className = "flex items-center justify-center">
                        {singlePhoto.mainImage && singlePhoto.mainImage.asset && (
                            <img src = {singlePhoto.mainImage.asset.url} alt = {singlePhoto.title} title = {singlePhoto.title} className = "rounded-xl shadow-xl dark:shadow-gray-100/10" />
                        )}
                    </div>
                </section>
            )}
        </div>
    )
}
