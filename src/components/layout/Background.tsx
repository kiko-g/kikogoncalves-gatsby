import React from 'react'

const Background = () => {
  return (
    <div className="background-wrapper">
      <div className="background-area">
        <ul className="background-circles">
          {Array(12)
            .fill(0)
            .map((_, bubbleIdx) => (
              <li key={`background-bubble-${bubbleIdx}`}></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Background
