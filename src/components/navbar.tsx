import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { DarkModeSwitch } from './darkModeSwitch'

const links = [
  { title: 'Home', location: '/' },
  { title: 'Me', location: '/me' },
  { title: 'CV', location: '/cv' },
  { title: 'Portfolio', location: '/portfolio' },
]

const Hamburger = ({ open }) => (
  <div className="absolute inset-y-0 right-4 flex items-start md:hidden">
    <Disclosure.Button
      className="transition duration-200 ease inline-flex items-center justify-center p-1 mt-3 rounded 
      text-gray-100 hover:text-white hover:bg-slate-500 focus:outline-none focus:ring focus:ring-inset focus:ring-white"
    >
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6 transition duration-200 ease" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6 transition duration-200 ease" aria-hidden="true" />
      )}
    </Disclosure.Button>
  </div>
)

const Header = ({ title, location }) => (
  <div className="flex-1 flex items-center justify-between md:items-stretch md:justify-between">
    <div className="hidden md:inline-flex self-center hover:opacity-80 duration-200 relative h-auto space-x-12">
      <Link to="/" className="flex items-center space-x-2">
        <h2 className="px-2 py-2 font-bold text-white tracking-tighter duration-150">{title}</h2>
      </Link>
    </div>

    <div className="hidden md:inline-flex self-center md:space-x-6">
      {links.map((link, index) => (
        <Link to={link.location} key={`location-${index}`} className="hover:bg-slate-400/50 duration-200 rounded py-1">
          <button
            type="button"
            className="flex items-center justify-center relative
            text-sky-50 dark:text-white 
            font-medium tracking-wider uppercase px-1.5 py-1"
          >
            <span>{link.title}</span>
            {location === link.title ? (
              <span className="absolute bottom-0 w-11/12 h-1 rounded bg-blue-400/50 dark:bg-blue-400"></span>
            ) : null}
          </button>
        </Link>
      ))}
    </div>

    <div className="hidden md:inline-flex self-center">
      <span key="nav-dark-mode" className="px-2 rounded-xl h-auto">
        <DarkModeSwitch />
      </span>
    </div>
  </div>
)

const Mobile = ({ location }) => (
  <Disclosure.Panel className="md:hidden">
    <div className="flex flex-col mr-4 space-y-1 md:block py-3">
      {links.map((link, index) => (
        <span className="relative rounded text-lg font-medium h-auto" key={`mobile-nav-${index}`}>
          <Link to={link.location} key={`location-${index}`}>
            <button
              type="button"
              className="text-white dark:text-white hover:bg-slate-400/50 hover:text-white font-medium tracking-wider uppercase px-1.5 py-0.5 rounded duration-200"
            >
              <span className={location === link.title ? 'underline' : ''}>{link.title}</span>
            </button>
          </Link>
        </span>
      ))}
    </div>
  </Disclosure.Panel>
)

export default function Navbar({ siteTitle, location }) {
  return (
    <Disclosure as="nav" className="bg-slate-600 dark:bg-slate-700 text-white space-x-4">
      {({ open }) => {
        return (
          <>
            <div className="relative flex items-center justify-between p-2">
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
