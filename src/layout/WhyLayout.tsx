// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const WhyLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default WhyLayout