import React from 'react'
import { classNames } from '../../utils'

type Props = {
  name: string
  decoration?: boolean
  children?: JSX.Element | JSX.Element[]
}

const Group = ({ name, decoration, children }: Props) => {
  return (
    <div
      className={classNames(
        'cv-group',
        decoration ? 'border-t border-primary px-1 pb-1 pt-4 dark:border-white' : 'p-1'
      )}
    >
      <header>
        <h2>
          <span className="highlight">{name.substring(0, 3)}</span>
          <span>{name.substring(3)}</span>
        </h2>
        <div className="filler"></div>
      </header>
      <div className="cv-group-entries">{children}</div>
    </div>
  )
}

export default Group
