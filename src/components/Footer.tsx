import React from 'react'
import { socials } from '../utils'

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <footer className="flex items-center justify-between bg-light p-2 text-xs text-gray-400 dark:bg-dark dark:text-gray-300 md:p-3 md:text-sm">
      <span className="text-gray-700 dark:text-gray-300 sm:text-center">© 2022 Francisco Gonçalves™</span>
      <div className="flex space-x-2 sm:justify-center md:mt-0 md:space-x-4">
        {socials.map((social, socialIdx) => (
          <a
            target="_blank"
            href={social.url}
            key={`social-${socialIdx}`}
            aria-labelledby={social.label}
            className="transition hover:opacity-80"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox={social.viewBox ? social.viewBox : '0 0 24 24'}
              aria-hidden="true"
            >
              <path fillRule="evenodd" d={social.svg} clipRule="evenodd" />
            </svg>
          </a>
        ))}
      </div>
    </footer>
  )
}
