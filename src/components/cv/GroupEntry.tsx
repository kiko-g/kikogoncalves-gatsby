import React from 'react'

type Props = {
  date: string
  location: string
  children?: JSX.Element | JSX.Element[]
}

const GroupEntry = ({ date, location, children }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 font-normal lg:flex-row">
      <div className="mx-auto ml-3 lg:ml-5">{children}</div>
      <div className="flex w-full flex-row justify-end gap-2 text-xs lg:w-min lg:flex-col lg:items-end lg:gap-0 lg:text-sm">
        <span className="whitespace-nowrap italic">{date}</span>
        <span className="whitespace-nowrap font-medium text-primary dark:text-tertiary">
          {location}
        </span>
      </div>
    </div>
  )
}

export default GroupEntry
