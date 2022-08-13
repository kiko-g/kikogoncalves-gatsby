import React from 'react'
import { Education, Experiences, Projects, Skills } from './groups'

const Core = () => {
  return (
    <div className="core">
      <Education />
      <Experiences />
      <Projects />
      <Skills />
    </div>
  )
}

export default Core
