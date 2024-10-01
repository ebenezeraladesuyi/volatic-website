// import React from 'react'

import Collaborate from "./Collaborate"
import Courses from "./Courses"
import { Heroboot } from "./HeroBoot"
// import ForexHome from "./ForexHome"
// import Hero from "./Heroo"
import Partners from "./Partners"
import Testimonies from "./Testimonies"
// import UnizikTechHome from "./UnizikTech"
// import UiUx from "./UiUx"
import Vision from "./Vision"


const HomeComp = () => {
  return (
    <div className="bg-white">

      {/* <Hero /> */}
      <Heroboot />
      <Vision />
      <Courses />
      {/* <ForexHome /> */}
      {/* <UnizikTechHome /> */}
      <Collaborate />
      <Testimonies />
      <Partners />

    </div>
  )
}

export default HomeComp