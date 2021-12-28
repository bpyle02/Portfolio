import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import client from "../../client"
import Header from "./Header";
import Masonry from "react-masonry-css";

const PhotoGallery = () =>
{
    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        client.fetch(
            `*[_type == "photo"] {
                title,
                slug,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                tags,
                publishedAt
            }`
        )
        .then((data) => setPhotos(data))
        .catch(console.error)
    }, [])

    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <div className = "bg-gray-100 dark:bg-zinc-900">
            <Header />
            <p className = "title pt-32 pb-20">Welcome to my Photo Gallery!</p>
            <div className = "mx-2">
                <Masonry breakpointCols = {breakpoints} className = "masonry-grid" columnClassName = "masonry-grid-columns">
                {photos.map((photo, index) => (
                    <div className = "container-wrapper">
                        <Link to = {`/photos/${photo.slug.current}`} className = "">
                            <p className = "container-obj">{photo.title}</p>
                            <img src={photo.mainImage.asset.url} alt={photo.title} className = "container-img" />
                        </Link>
                    </div>
                ))}
                </Masonry>
            </div>
        </div>
    )
}

export default PhotoGallery;