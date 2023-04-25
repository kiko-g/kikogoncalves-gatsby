import React from 'react'
import Sidebar from './Sidebar'
import Core from './Core'
import '../../styles/cv.css'

type Props = {}

export default function Cv({}: Props) {
  return (
    <div className="cv">
      <Sidebar />
      <Core />
    </div>
  )
}
