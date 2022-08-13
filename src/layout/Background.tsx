import React from 'react'
import '../styles/background.css'

const Background = () => {
  return (
    <div className="background-wrapper">
      <div className="background-area">
        <ul className="background-circles">
          {Array(12)
            .fill(0)
            .map((bubble, bubbleIdx) => (
              <li key={`background-bubble-${bubbleIdx}`}></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Background
