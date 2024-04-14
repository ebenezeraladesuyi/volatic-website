// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../components"

const RegisterPageLayout = () => {
  return (
    <div>

        <Header />

        <Outlet />

        {/* <Footer /> */}

    </div>
  )
}

export default RegisterPageLayout