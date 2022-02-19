import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import client from "../../client"
import Header from "./Header";
import Masonry from "react-masonry-css";

const PhotoGallery = () =>
{
    const [photos, setPhotos] = useState([])
    //const [categories, setCategories] = useState([])
    //const [location, setLocation] = useState([])
    //const [camera, setCamera] = useState([])
    //const [sortCategories, setSortCategories] = useState("All")
    //const [sortLocation, setSortLocation] = useState("All")
    //const [sortCamera, setSortCamera] = useState("All")
    
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
            }`,
        )
        .then((data) => setPhotos(data))
        .catch(console.error)
    }, [])

    // && $keyword1 in categories[]->title && $keyword2 in photoLocation[]->location && $keyword3 in cameraModel[]->camera
    //, {"keyword1":sortCategories, "keyword2":sortLocation, "keyword3":sortCamera}

    // useEffect(() => {
    //     client.fetch(
    //         `*[_type == "category"] {
    //         title,
    //     }`
    //     )
    //     .then((data) => setCategories(data))
    //     .catch(console.error)
    // }, [])

    // useEffect(() => {
    //     client.fetch(
    //         `*[_type == "camera"] {
    //         camera,
    //     }`
    //     )
    //     .then((data) => setCamera(data))
    //     .catch(console.error)
    // }, [])

    // useEffect(() => {
    //     client.fetch(
    //         `*[_type == "location"] {
    //         location,
    //     }`
    //     )
    //     .then((data) => setLocation(data))
    //     .catch(console.error)
    // }, [])

    // function sortPhotoCategories(e) {
    //     console.log(e)
    //     setSortCategories(e)
    // }
    
    // function sortPhotoLocations(e) {
    //     console.log(e)
    //     setSortLocation(e)
    // }

    // function sortCameraModels(e) {
    //     console.log(e)
    //     setSortCamera(e)
    // }

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

//  <p>Categories:</p>
//             {categories.map((category, i) => (
//                 <div>
//                     <p onClick = {() => sortPhotoCategories(category)} className = "button">{category.title}</p>
//                 </div>
//             ))}
//             <p>Cameras:</p>
//             {camera.map((camera, i) => (
//                 <div>
//                     <p onClick = {() => sortCameraModels(camera)} className = "button">{camera.camera}</p>
//                 </div>
//             ))}
//             <p>Locations:</p>
//             {location.map((location, i) => (
//                 <div>
//                     <p onClick = {() => sortPhotoLocations(location)} className = "button">{location.location}</p>
//                 </div>
//             ))}