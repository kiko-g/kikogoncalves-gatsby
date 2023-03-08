import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'
import { socials } from '../../utils'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  HomeModernIcon,
  BriefcaseIcon,
  NewspaperIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { title: 'Home', location: '/', icon: <HomeModernIcon className="h-5 w-5" />, shown: true },
  { title: 'CV', location: '/cv', icon: <BriefcaseIcon className="h-5 w-5" />, shown: true },
  {
    title: 'Journal',
    location: '/journal',
    icon: <NewspaperIcon className="h-5 w-5" />,
    shown: true,
  },
  {
    title: 'Portfolio',
    location: '/portfolio',
    icon: <CommandLineIcon className="h-5 w-5" />,
    shown: true,
  },
]

const avatar = '/images/avatar.png'

type Props = {
  siteTitle: string
  location: string
}

export default function Navbar({ siteTitle, location }: Props) {
  return (
    <Disclosure
      as="nav"
      className="background sticky top-0 z-20 bg-ice/90 px-4 py-3 text-gray-800 
      dark:bg-navy/90 dark:text-white md:py-0 md:px-4"
    >
      {({ open }) => {
        return (
          <header>
            <div
              className={`${
                open ? 'p-0' : 'p-2'
              } relative flex items-center justify-between md:py-0`}
            >
              <Hamburger title={siteTitle} open={open} />
              <Header title={siteTitle} location={location} />
            </div>
            <Mobile location={location} />
          </header>
        )
      }}
    </Disclosure>
  )
}

type HamburgerProps = {
  title: string
  open: boolean
}

function Hamburger({ title, open }: HamburgerProps) {
  return (
    <div
      className={`z-50 md:hidden ${
        open
          ? 'absolute top-2 right-2 my-auto flex h-6 items-center justify-end gap-x-3'
          : 'flex w-full items-center justify-between gap-x-3'
      }`}
    >
      {open ? null : (
        <Link to="/" className="flex items-center gap-x-2">
          <img className="avatar h-6 w-6 rounded-full" src={avatar} alt="Finishers Hub" />
          <h3 className="tracking-tight">{title}</h3>
        </Link>
      )}
      <div className="flex items-center gap-x-2">
        <DarkModeSwitch />
        <Disclosure.Button
          className="group -ml-[3px] py-[3px] text-gray-800 transition duration-200 
        ease-in dark:text-white md:hidden"
        >
          <span className="sr-only">Open nav menu</span>
          {open ? (
            <XMarkIcon
              className="ease block h-7 w-7 transition duration-200 
              group-hover:text-rose-600 dark:group-hover:text-rose-500"
              aria-hidden="true"
            />
          ) : (
            <Bars3Icon
              className="ease block h-7 w-7 transition duration-200 
            group-hover:text-primary dark:group-hover:text-secondary"
              aria-hidden="true"
            />
          )}
        </Disclosure.Button>
      </div>
    </div>
  )
}

type HeaderProps = {
  title: string
  location: string
}

function Header({ title, location }: HeaderProps) {
  return (
    <div className="z-50 flex flex-1 items-center justify-between md:items-stretch md:justify-between">
      <div className="relative hidden h-auto self-center duration-200 hover:opacity-80 md:flex md:gap-x-8">
        <Link to="/" className="flex items-center gap-x-2">
          <img
            src={avatar}
            alt="Finishers Hub"
            className="z-20 inline-flex h-6 w-6 rounded-full transition"
          />
          <h3 className="text-sm font-bold tracking-tighter duration-150 lg:text-base">{title}</h3>
        </Link>
      </div>

      <div className="hidden self-center md:flex md:gap-x-8">
        {navigation.map((link, index) =>
          link.shown ? (
            <Link to={link.location} key={`nav-${index}`} className="relative py-1">
              <button
                type="button"
                className={`flex h-12 items-center justify-center lowercase transition ${
                  location === link.title
                    ? 'font-bold text-primary dark:text-white'
                    : 'font-normal text-gray-800/50 hover:text-gray-800 dark:text-white/40 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center justify-center gap-x-1.5">
                  <span>{link.icon}</span>
                  <span>{link.title}</span>
                </span>
              </button>
            </Link>
          ) : null
        )}
      </div>

      <div className="hidden self-center md:inline-flex md:items-center md:justify-center md:gap-x-2">
        <DarkModeSwitch />
      </div>
    </div>
  )
}

type MobileProps = {
  location: string
}

function Mobile({ location }: MobileProps) {
  return (
    <Disclosure.Panel className="flex flex-col gap-y-3 py-2 md:hidden">
      {navigation.map((link, index) =>
        link.shown ? (
          <Link to={link.location} className="relative h-auto" key={`mobile-nav-${index}`}>
            <button
              type="button"
              className={`flex h-auto items-center justify-center lowercase transition ${
                location === link.title
                  ? 'font-bold text-primary dark:text-white'
                  : 'font-normal text-gray-800/50 hover:text-gray-800 dark:text-white/40 dark:hover:text-white'
              }`}
            >
              <span className="flex items-center justify-center gap-x-3">
                <span>{link.icon}</span>
                <span>{link.title}</span>
              </span>
            </button>
          </Link>
        ) : null
      )}
      <div
        className="relative flex h-auto items-center justify-end gap-x-4 border-t border-primary/25 
        pt-4 dark:border-secondary/25"
      >
        {socials.map((social, socialIdx) =>
          social.shown ? (
            <Link
              target="_blank"
              to={social.url}
              key={`social-${socialIdx}`}
              title={social.label}
              aria-label={social.label}
              className={`transition ${social.label}`}
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox={social.viewBox ? social.viewBox : '0 0 24 24'}
                aria-hidden="true"
              >
                {social.svg.map((d, dIdx) => (
                  <path
                    fillRule="evenodd"
                    d={d}
                    clipRule="evenodd"
                    key={`social-${socialIdx}-svg-${dIdx}`}
                  />
                ))}
              </svg>
            </Link>
          ) : null
        )}
      </div>
    </Disclosure.Panel>
  )
}
