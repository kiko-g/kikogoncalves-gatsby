import React from 'react'

type Props = {
  title: string
}

export const Sidebar = ({ title }: Props) => {
  return (
    <nav className="w-[300px] bg-darkest dark:bg-darkest">
      <div>Sidebar</div>
      <p>{title}</p>
    </nav>
  )
}
