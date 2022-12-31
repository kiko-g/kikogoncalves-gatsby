import React from 'react'
import { Link } from 'gatsby'
import { GithubIcon, LinkedinIcon } from '../../components/icons'
import { GlobeEuropeAfricaIcon, InboxArrowDownIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {
  const contacts = [
    {
      icon: <PhoneIcon />,
      element: <span>(+351) 918271105</span>,
    },
    {
      icon: <InboxArrowDownIcon />,
      element: <a href="mailto:kikojpgoncalves@gmail.com">kikojpgoncalves@gmail.com</a>,
    },
    {
      icon: <GlobeEuropeAfricaIcon />,
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
    <div className="side">
      <header>
        <img src={'/images/hero/hero1.jpg'} alt="profile-picture" />
        <div>
          <h2>
            <strong>Francisco</strong> <span>Gonçalves</span>
          </h2>
          <h4>
            Software Engineering Student @{' '}
            <a href="https://fe.up.pt" className="link">
              FEUP
            </a>
          </h4>
          <h5>Porto, Portugal</h5>
        </div>
      </header>

      <ul>
        {contacts.map((contact, contactIdx) => (
          <li key={`cv-contact-${contactIdx}`}>
            {contact.icon}
            {contact.element}
          </li>
        ))}
      </ul>

      <a target="_blank" rel="noopener" href={'cv.pdf'}>
        View PDF version
      </a>
    </div>
  )
}

export default Sidebar
