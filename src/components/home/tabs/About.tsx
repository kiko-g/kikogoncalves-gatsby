import React from 'react'
import Socials from './Socials'
import { links } from '../../../utils'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

type Props = {}

const About = ({}: Props) => {
  const details = [
    { key: 'Age', value: 23 },
    { key: 'City', value: 'Porto, Portugal' },
    { key: 'Birthday', value: '3 August 1999' },
    { key: 'Degree', value: 'Masters in Computer Engineering' },
    { key: 'Occupation', value: 'Software Engineering Student @ FEUP, MEIC' },
  ]

  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">About</div>
        <h3 className="tab-inner-subheader">
          Software Engineering Student @{' '}
          <a className="link" target="_blank" rel="noreferrer" href={links.meic}>
            FEUP-MEIC
          </a>
        </h3>

        <article className="tab-inner-prose">
          <p>
            Hi, I'm Francisco. Im currently taking my Masters's Degree in Informatics and Computing Engineering @ FEUP.
          </p>
          <p>
            I have a great passion for software engineering as a whole with a special interest in frontend development
            and data science. On the more personal side of things, I would describe myself as a passionate person, who
            believes in getting better every day and finding zeal in things. My interests are mostly music, gaming,
            football, media, and entertainment. As for hobbies, I often play the guitar, sing, game, program stuff, and
            exercise.
          </p>
        </article>

        <ul className="tab-inner-bullet-facts">
          {details.map((item, index) => (
            <li key={`detail-${index}`} className="flex items-center gap-x-1 md:gap-x-2">
              <ChevronRightIcon className="h-4 w-4 flex-0 text-primary dark:text-tertiary" />
              <strong className="text-gray-700 dark:text-light">{item.key}</strong>
              <span>&middot;</span>
              <span className="flex-1 truncate font-normal text-gray-500 dark:text-gray-200">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-panel-inner-right">
        <img src={'/images/hero/hero1.jpg'} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default About
