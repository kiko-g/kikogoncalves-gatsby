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
  <div
    className={`z-50 min-h-[3rem] md:hidden ${
      open ? 'absolute top-4 right-2 space-x-1' : 'flex w-full items-center justify-between px-2'
    }`}
  >
    <Link to="https://linktr.ee/kikogoncalves" target="_blank">
      {open ? (
        <StaticImage className="avatar top-0.5 h-5 w-5" src="../images/avatar.png" alt="Francisco Gonçalves" />
      ) : (
        <StaticImage className="avatar h-6 w-6" src="../images/avatar.png" alt="Francisco Gonçalves" />
      )}
    </Link>

    <Disclosure.Button className="hamburger group">
      <span className="sr-only">Open nav menu</span>
      {open ? (
        <XIcon className="ease block h-6 w-6 transition duration-200 group-hover:text-fourth" aria-hidden="true" />
      ) : (
        <MenuIcon className="ease block h-6 w-6 transition duration-200 group-hover:text-white/50" aria-hidden="true" />
      )}
    </Disclosure.Button>
  </div>
)

const Header = ({ title, location }) => (
  <div className="header">
    <div className="relative hidden h-auto space-x-12 self-center duration-200 hover:opacity-80 md:inline-flex">
      <Link to="/" className="flex items-center space-x-2">
        <StaticImage
          className="z-20 inline-flex h-6 w-6 rounded-full transition"
          src="../images/avatar.png"
          alt="Francisco Gonçalves"
        />
        <h2 className="text-xs font-bold tracking-tighter text-white duration-150 lg:text-base">{title}</h2>
      </Link>
    </div>

    <div className="hidden self-center md:inline-flex md:space-x-6">
      {links.map((link, index) => (
        <Link to={link.location} key={`nav-${index}`} className="relative py-1">
          <button
            type="button"
            className={`flex h-12 items-center justify-center font-medium uppercase tracking-wider transition ${
              location === link.title ? 'text-secondary hover:text-secondary/75' : 'text-white/75 hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center">
              {link.icon}
              {link.title}
            </span>
          </button>
          {location === link.title ? <span className="absolute bottom-0 h-1 w-full rounded-t-sm bg-secondary" /> : null}
        </Link>
      ))}
    </div>

    <div className="hidden self-center md:inline-flex">
      <DarkModeSwitch />
    </div>
  </div>
)

const Mobile = ({ location }) => (
  <Disclosure.Panel className="flex flex-col space-y-3 py-4 md:hidden">
    {links.map((link, index) => (
      <Link to={link.location} className="relative h-auto" key={`mobile-nav-${index}`}>
        <button
          type="button"
          className={`flex h-auto items-center justify-center font-medium uppercase tracking-wider ${
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
