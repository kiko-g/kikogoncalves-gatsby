import React, { useState } from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { Tab, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { StaticImage } from 'gatsby-plugin-image'
import { classNames, links, socials } from '../utils'
import './styles/index.css'

const IndexPage = () => (
  <Layout location="Home" homepage={true}>
    <Seo title="Home" />
    <div className="home-wrapper">
      <Hero />
    </div>
  </Layout>
)

export default IndexPage

const Hero = () => {
  const [focusRing] = useState(false)
  const headers = ['About', 'Skills', 'Experience']
  const content = [<About />, <Skills />, <Experience />]

  return (
    <Tab.Group>
      <Tab.List className="tab-list">
        {headers.map(category => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames('tab', focusRing ? 'tab-focus-ring' : '', selected ? 'tab-selected' : 'tab-not-selected')
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="tab-panels">
        {content.map((content, index) => (
          <Tab.Panel key={index} className={classNames('tab-panel', focusRing ? 'tab-focus-ring' : '')}>
            {content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

const About = () => {
  const about = {
    general:
      "Hi, I'm Francisco. Im currently taking my Masters's Degree in Informatics and Computing Engineering @ FEUP.",
    personal:
      'I have a great passion for software engineering as a whole with a special interest in frontend development and data science. On the more personal side of things, I would describe myself as a passionate person, who believes in getting better every day and finding zeal in things. My interests are mostly music, gaming, football, media, and entertainment. As for hobbies, I often play the guitar, sing, game, program stuff, and exercise.',
  }
  const details = [
    { key: 'Age', value: 22 },
    { key: 'City', value: 'Porto' },
    { key: 'Birthday', value: '3 August 1999' },
    { key: 'Degree', value: 'Masters in Computer Engineering' },
  ]

  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">About</div>
        <h3 className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </h3>

        <article className="tab-inner-prose">
          <p>{about.general}</p>
          <p>{about.personal}</p>
        </article>

        <ul className="tab-inner-bullet-facts">
          {details.map((item, index) => (
            <li key={`detail-${index}`}>
              <Icon icon="codicon:triangle-right" color="#9f7aea" className="inline" />
              <span>&nbsp;</span>
              <strong className="text-gray-700 dark:text-light">{item.key}</strong>
              <span>&nbsp;&middot;&nbsp;</span>
              <span className="font-normal text-gray-500 dark:text-gray-200">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero1.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Skills</div>
        <h3 className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </h3>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero2.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Experience</div>
        <h3 className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </h3>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Socials = () => {
  return (
    <div className="flex space-x-1 text-gray-400 dark:text-gray-300 sm:justify-center md:mt-0">
      {socials
        .filter(social => social.shown)
        .map((social, socialIdx) => (
          <a
            target="_blank"
            href={social.url}
            key={`social-${socialIdx}`}
            aria-labelledby={social.label}
            className="transition hover:text-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-4 w-4 md:h-6 md:w-6"
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
