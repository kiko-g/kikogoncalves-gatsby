import React from 'react'
import { socials, links } from '../../utils'

type Props = {}

const Socials = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 text-gray-400 dark:text-gray-300 md:mt-0">
      {socials
        .filter(social => social.shown)
        .map((social, socialIdx) => (
          <a
            target="_blank"
            href={social.url}
            key={`social-${socialIdx}`}
            aria-labelledby={social.label}
            className={`transition ${social.label}`}
          >
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              fill="currentColor"
              viewBox={social.viewBox ? social.viewBox : '0 0 24 24'}
              aria-hidden="true"
            >
              {social.svg.map((d, dIdx) => (
                <path fillRule="evenodd" d={d} clipRule="evenodd" key={`social-${socialIdx}-svg-${dIdx}`} />
              ))}
            </svg>
          </a>
        ))}
    </div>
  )
}

export default Socials
