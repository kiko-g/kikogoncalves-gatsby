import React from 'react'
import { Link } from 'gatsby'
import { GithubIcon, LinkedinIcon } from '../../../components/icons'
import { GlobeEuropeAfricaIcon, InboxArrowDownIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  const contacts = [
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      element: <span>(+351) 918271105</span>,
    },
    {
      icon: <InboxArrowDownIcon className="h-5 w-5" />,
      element: <a href="mailto:kikojpgoncalves@gmail.com">kikojpgoncalves@gmail.com</a>,
    },
    {
      icon: <GlobeEuropeAfricaIcon className="h-5 w-5" />,
      element: <Link to="/">kikogoncalves.com</Link>,
    },
    {
      icon: <GithubIcon />,
      element: <a href="https://github.com/kiko-g">kiko-g</a>,
    },
    {
      icon: <LinkedinIcon />,
      element: <a href="https://linkedin.com/in/kikogoncalves">kikogoncalves</a>,
    },
  ]

  return (
    <div className="order-1 col-span-4 flex h-full w-full flex-col items-start justify-start gap-2 rounded-xl lg:order-2 lg:col-span-1 lg:gap-3">
      <header className="flex flex-col gap-3">
        <img
          src={'/images/hero/hero1.jpg'}
          alt="profile-picture"
          className="aspect-square w-full rounded-lg shadow"
        />
        <div>
          <h2 className="text-lg font-normal tracking-wide lg:text-xl">
            <strong>Francisco</strong> <span>Gonçalves</span>
          </h2>
          <h4 className="text-sm font-normal tracking-tighter lg:text-sm xl:text-base">
            Software Engineering Student @{' '}
            <a href="https://fe.up.pt" className="link">
              FEUP
            </a>
          </h4>
          <h5 className="text-xs font-medium tracking-tighter lg:-mt-0.5 lg:text-sm">
            Porto, Portugal
          </h5>
        </div>
      </header>

      <ul className="mt-0 w-full space-y-0.5 py-1 px-1 text-[0.95rem] font-normal">
        {contacts.map((contact, contactIdx) => (
          <li key={`cv-contact-${contactIdx}`} className="flex items-center justify-start gap-1.5">
            {contact.icon}
            <span className="hover:text-[#0a66c2] hover:underline hover:opacity-90 dark:hover:text-tertiary">
              {contact.element}
            </span>
          </li>
        ))}
      </ul>

      <a
        target="_blank"
        rel="noopener"
        href="/cv.pdf"
        className="w-full rounded bg-primary px-3 py-2 text-center font-normal capitalize tracking-tight text-white transition hover:cursor-pointer hover:bg-[#0a66c2] hover:opacity-90 dark:bg-tertiary"
      >
        View PDF version
      </a>
    </div>
  )
}

export default Sidebar
