import React from 'react'
import Sidebar from './Sidebar'
import Core from './Core'

type Props = {}

export default function Cv({}: Props) {
  return (
    <div className="cv">
      <Sidebar />
      <Core />
    </div>
  )
}
