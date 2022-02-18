import React from 'react'
import { Link } from 'gatsby'
import { Socials } from './Socials'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

export const HeroSidebar = (props: Props) => {
  return (
    <>
      <div className="hidden min-h-full rounded-xl bg-white text-dark dark:bg-light md:block">
        <div className="flex flex-col items-center justify-between p-3 lg:p-4 xl:p-5">
          <div>
            <Link to="https://linktr.ee/kikogoncalves" target="_blank">
              <StaticImage
                src="../images/hero.jpg"
                alt="Francisco Gonçalves"
                className="h-auto w-full rounded-full shadow"
              />
            </Link>
            <h1 className="text-sx py-0 text-center font-bold tracking-wide md:py-2 md:text-xl">Francisco Gonçalves</h1>
          </div>
          <Socials />
        </div>
      </div>

      <div className="block min-h-full rounded-xl bg-white text-dark dark:bg-light md:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-sx py-0 text-center font-bold tracking-wide md:py-2 md:text-xl">Francisco Gonçalves</h1>
          <Socials />
        </div>
      </div>
    </>
  )
}
