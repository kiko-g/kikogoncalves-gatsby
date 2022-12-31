import React from 'react'

type Props = {
  date: string
  location: string
  children?: JSX.Element | JSX.Element[]
}

const GroupEntry = ({ date, location, children }: Props) => {
  return (
    <div className="cv-group-entry">
      <div className="content">{children}</div>
      <div className="details">
        <span className="date">{date}</span>
        <span className="location">{location}</span>
      </div>
    </div>
  )
}

export default GroupEntry
