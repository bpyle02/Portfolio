import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';

import Home from "./components/Home";
import Blog from "./components/Blog/Blog";
import SinglePost from "./components/Blog/SinglePost";
import Error from "./components/Error";
import PhotoGallery from "./components/Photo Gallery/PhotoGallery";
import SinglePhoto from "./components/Photo Gallery/SinglePhoto"

function App()
{
    useEffect(() => {
      Aos.init({
        once: true,
      })
  })
  return (
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/blog" element = {<Blog />} />
          <Route exact path = "/blog/:slug" element = {<SinglePost />} />
          <Route exact path = "/photos" element = {<PhotoGallery />} />
          <Route exact path = "/photos/:slug" element = {<SinglePhoto />} />
          <Route exact path = "*" element = {<Error />} />
        </Routes>
      </div>
  );
}

export default App;