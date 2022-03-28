import React from 'react'
import '../styles/animation.css'

type Props = {}

export const Background: React.FC<Props> = () => {
  return (
    <div className="background">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
