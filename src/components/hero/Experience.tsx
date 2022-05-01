import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Socials from './Socials'

type Props = {}

const Experience = ({}: Props) => {
  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Experience</div>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Experience
