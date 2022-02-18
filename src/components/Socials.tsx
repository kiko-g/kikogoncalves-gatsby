import * as React from 'react'
import { Link } from 'gatsby'
import { Icon } from '@iconify/react'

export const Socials = () => {
  const socials = [
    {
      name: 'Github',
      icon: <Icon icon="akar-icons:github-fill" color="#333" className="text-lg sm:text-2xl lg:text-3xl" />,
      href: 'https://github.com/kiko-g',
    },
    {
      name: 'Linkedin',
      icon: <Icon icon="logos:linkedin-icon" color="#39e09b" className="text-lg sm:text-2xl lg:text-3xl" />,
      href: 'https://linkedin.com/in/kikogoncalves',
    },
    {
      name: 'Twitter',
      icon: <Icon icon="simple-icons:twitter" color="#1da1f2" className="text-lg sm:text-2xl lg:text-3xl" />,
      href: 'https://twitter.com/kikogoncalves_',
    },
    {
      name: 'Linktree',
      icon: <Icon icon="simple-icons:linktree" color="#39e09b" className="text-lg sm:text-2xl lg:text-3xl" />,
      href: 'https://linktr.ee/kikogoncalves',
    },
  ]

  return (
    <ul className="flex justify-center space-x-0">
      {socials.map(item => (
        <Link
          to={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg p-1 font-semibold text-white transition hover:opacity-75"
        >
          {item.icon}
        </Link>
      ))}
    </ul>
  )
}
