import React from 'react'
import Core from './cv/Core'
import Sidebar from './cv/Sidebar'

type Props = {}

export default function Cv({}: Props) {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-4 rounded-xl bg-white p-4 text-gray-700 dark:bg-white/5 dark:text-white lg:gap-8">
      <Sidebar />
      <Core />
    </div>
  )
}
