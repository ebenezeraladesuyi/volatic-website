// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const CoursesLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default CoursesLayout