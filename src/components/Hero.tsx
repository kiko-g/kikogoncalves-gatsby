import React, { useState } from 'react'
import { Tab, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { StaticImage } from 'gatsby-plugin-image'
import { classNames, links, socials } from '../utils'
import '../styles/hero.css'

type Props = {}

export const Hero: React.FC<Props> = () => {
  const [focusRing] = useState(false)
  const headers = ['About', 'Skills', 'Experience']
  const content = [<About />, <Skills />, <Experience />]

  return (
    <div className="wrapper">
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
              <Transition
                show={true}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                {content}
              </Transition>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

const About: React.FC<Props> = () => {
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
        <span className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </span>

        <p className="tab-inner-prose">
          {about.general}
          {about.personal}
        </p>

        <ul className="tab-inner-bullet-facts">
          {details.map((item, index) => (
            <li key={`detail-${index}`}>
              <Icon icon="codicon:triangle-right" color="#9f7aea" className="inline" />
              <span>&nbsp;</span>
              <strong className="text-gray-700 dark:text-light1">{item.key}</strong>
              <span>&nbsp;&middot;&nbsp;</span>
              <span className="font-normal text-gray-500 dark:text-gray-200">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero1.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h1 className="tab-inner-image-header">Francisco Gonçalves</h1>
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Skills: React.FC<Props> = () => {
  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Skills</div>
        <span className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </span>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero2.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h1 className="tab-inner-image-header">Francisco Gonçalves</h1>
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Experience: React.FC<Props> = () => {
  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Experience</div>
        <span className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </span>
      </div>

      <div className="tab-panel-inner-right">
        <StaticImage src={`../../static/images/hero.jpg`} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h1 className="tab-inner-image-header">Francisco Gonçalves</h1>
          <Socials />
        </div>
      </div>
    </div>
  )
}

const Socials: React.FC<Props> = () => {
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
              <path fillRule="evenodd" d={social.svg} clipRule="evenodd" />
            </svg>
          </a>
        ))}
    </div>
  )
}
