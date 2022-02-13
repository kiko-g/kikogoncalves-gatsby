import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { DarkModeSwitch } from './darkModeSwitch'
import { links } from '../utils'

export default function Navbar({ siteTitle, location }) {
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => {
        return (
          <>
            <div className="relative flex items-center justify-between">
              <Hamburger open={open} />
              <Header title={siteTitle} location={location} />
            </div>
            <Mobile location={location} />
          </>
        )
      }}
    </Disclosure>
  )
}

const Hamburger = ({ open }) => (
  <Disclosure.Button className="hamburger group">
    <span className="sr-only">Open nav menu</span>
    {open ? (
      <XIcon className="block h-6 w-6 transition duration-200 ease group-hover:text-fourth" aria-hidden="true" />
    ) : (
      <MenuIcon className="block h-6 w-6 transition duration-200 ease group-hover:text-white/50" aria-hidden="true" />
    )}
  </Disclosure.Button>
)

const Header = ({ title, location }) => (
  <div className="header">
    <div className="hidden self-center md:inline-flex hover:opacity-80 duration-200 relative h-auto space-x-12">
      <Link to="/" className="flex items-center space-x-2">
        <h2 className="font-bold text-white tracking-tighter duration-150">{title}</h2>
      </Link>
    </div>

    <div className="hidden self-center md:inline-flex md:space-x-6">
      {links.map((link, index) => (
        <span className="relative">
          <Link
            to={link.location}
            key={`location-${index}`}
            className="hover:bg-slate-400/50 duration-200 rounded py-1"
          >
            <button
              type="button"
              className={`flex items-center justify-center font-medium tracking-wider uppercase transition h-12 ${
                location === link.title ? 'text-secondary hover:text-secondary/75' : 'text-white/75 hover:text-white'
              }`}
            >
              <span className="flex items-center justify-center">
                {link.icon}
                {link.title}
              </span>
            </button>
          </Link>
          {location === link.title ? <span className="absolute bottom-0 w-full h-1 rounded-t-sm bg-secondary" /> : null}
        </span>
      ))}
    </div>

    <div className="hidden self-center md:inline-flex">
      <DarkModeSwitch />
    </div>
  </div>
)

const Mobile = ({ location }) => (
  <Disclosure.Panel className="md:hidden flex flex-col py-4 space-y-3">
    {links.map((link, index) => (
      <Link to={link.location} className="relative h-auto" key={`mobile-nav-${index}`}>
        <button
          type="button"
          className={`flex items-center justify-center font-medium tracking-wider uppercase h-auto ${
            location === link.title ? 'text-secondary hover:text-secondary/80' : 'text-white/80 hover:text-white'
          }`}
        >
          <span className="flex items-center justify-center">
            {link.icon}
            {link.title}
          </span>
        </button>
      </Link>
    ))}
  </Disclosure.Panel>
)
11
