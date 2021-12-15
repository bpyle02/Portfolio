import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Aos from "aos";
import 'aos/dist/aos.css';

import Home from "./components/Home";
import Blog from "./components/Blog/Blog";

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
        </Routes>
      </div>
  );
}

export default App;