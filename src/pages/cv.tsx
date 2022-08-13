import React from 'react'
import { Link } from 'gatsby'
import { Layout, Seo } from '../layout'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import { GlobeIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import '../styles/pages/cv.css'

const CvPage = () => {
  const contacts = [
    {
      icon: <PhoneIcon />,
      element: <span>(+351) 918271105</span>,
    },
    {
      icon: <MailIcon />,
      element: <a href="mailto:kikojpgoncalves@gmail.com">kikojpgoncalves@gmail.com</a>,
    },
    {
      icon: <GlobeIcon />,
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
    <Layout liquid location="CV">
      <Seo title="CV" />
      <div className="cv">
        <div className="side">
          <header>
            <img src={'/images/hero/hero1.jpg'} alt="profile-picture" />
            <div>
              <h2>
                <strong>Francisco</strong> <span>Gonçalves</span>
              </h2>
              <h4>
                Software Engineering Student @{' '}
                <a href="fe.up.pt" className="link">
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

        <div className="core"></div>
      </div>
    </Layout>
  )
}

export default CvPage
