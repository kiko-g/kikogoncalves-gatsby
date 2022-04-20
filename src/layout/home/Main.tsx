import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

type Props = {
  title: string
}

export const Main = ({ title }: Props) => {
  return (
    <div className="min-h-adjusted w-full">
      <div className="flex h-full flex-col justify-between">
        <Navbar location="Home" siteTitle={title} />
        <Footer siteTitle={title} />
      </div>
    </div>
  )
}
