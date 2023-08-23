import React from 'react'
import classNames from 'classnames'

type Props = {
  name: string
  decoration?: boolean
  children?: JSX.Element | JSX.Element[]
}

const Group = ({ name, decoration, children }: Props) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-1',
        decoration ? 'border-t border-primary px-1 pb-1 pt-4 dark:border-white' : 'p-1'
      )}
    >
      <header className="flex items-center gap-3">
        <h2 className="text-2xl font-bold">
          <span className="text-primary dark:text-secondary">{name.substring(0, 3)}</span>
          <span>{name.substring(3)}</span>
        </h2>
        <div className="h-[1px] w-full bg-gray-300"></div>
      </header>

      <div className="flex flex-col gap-16 lg:gap-6">{children}</div>
    </div>
  )
}

export default Group
