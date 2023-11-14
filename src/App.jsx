import { useState } from 'react'
import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout"
import About from "./pages/About/About"
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";
import Gellery from "./pages/Gellery/Gellery";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import OurStory from "./pages/OurStory/Ourstory";
import Process from "./pages/Process/Process";
import Servicess from "./pages/Servicess/Servicess"
import Notfound from "./pages/Notfound/Notfound"

function App() {
  

  const wifi = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "career",
          element: <Career />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "gellery",
          element: <Gellery />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "ourstory",
          element: <OurStory />,
        },
        {
          path: "process",
          element: <Process />,
        },
        {
          path: "servicess",
          element: <Servicess />,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);



  return (
    <>
      <RouterProvider router={wifi} />
    </>
  );
}

export default App
