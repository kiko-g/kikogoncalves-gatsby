import React from 'react'
import { Education, Experiences, Projects, Skills } from './groups'

const Core = () => {
  return (
    <div className="order-2 col-span-4 flex h-full w-full flex-col gap-4 lg:order-1 lg:col-span-3">
      <Education />
      <Experiences />
      <Projects />
      <Skills />
    </div>
  )
}

export default Core
