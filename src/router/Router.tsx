/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout"
import ContactLayout from "../layout/ContactLayout";
import CoursesLayout from "../layout/CoursesLayout";
import RegisterPageLayout from "../layout/RegisterLayout";
import WhyLayout from "../layout/WhyLayout";
import DownloadDocsLayout from "../layout/DownloadDocsLayout";
import ForexLayout from "../layout/ForexLayout";
import UnizikLayout from "../layout/UnizikLayout";

const HomeComp = lazy(() => import("../pages/HomePage/HomeComp"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const CourseComp = lazy(() => import("../pages/courses/CourseComp"));
const Register = lazy(() => import("../pages/register/Register"));
const WhyVolatic = lazy(() => import("../pages/whyVolatic/WhyVolatic"));
const DownloadFile = lazy(() => import("../pages/download/Docs"));
const ForexRegister = lazy(() => import("../pages/forex/ForexRegister"));
const UnizikTech = lazy(() => import("../pages/unizikTech/UnizikTech"));


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
    {
        path: "/courses",
        element: <CoursesLayout />,
        children: [
            {
                index: true,
                element: <CourseComp />
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterPageLayout />,
        children: [
            {
                index: true,
                element: <Register />
            }
        ]
    },
    {
        path: "/whyvolatic",
        element: <WhyLayout />,
        children: [
            {
                index: true,
                element: <WhyVolatic />
            }
        ]
    },
    {
        path: "/downloaddocs",
        element: <DownloadDocsLayout />,
        children: [
            {
                index: true,
                element: <DownloadFile />
            }
        ]
    },
    {
        path: "/forex",
        element: <ForexLayout />,
        children: [
            {
                index: true,
                element: <ForexRegister />
            }
        ]
    },
    {
        path: "/bootcamp",
        element: <UnizikLayout />,
        children: [
            {
                index: true,
                element: <UnizikTech />
            }
        ]
    },
])