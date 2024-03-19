/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout"
import ContactLayout from "../layout/ContactLayout";
// import Contact from "../pages/contact/Contact";


const HomeComp = lazy(() => import("../pages/HomePage/HomeComp"));
const Contact = lazy(() => import("../pages/contact/Contact"));


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
])