import React from 'react'

type Props = {
  name: string
  children?: JSX.Element | JSX.Element[]
}

const Group = ({ name, children }: Props) => {
  return (
    <div className="group">
      <header>
        <h2>
          <span className="highlight">{name.substring(0, 3)}</span>
          <span>{name.substring(3)}</span>
        </h2>
        <div className="filler"></div>
      </header>
      <div className="group-entries">{children}</div>
    </div>
  )
}

export default Group
