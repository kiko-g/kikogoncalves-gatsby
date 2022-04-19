import React, { useState } from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { Tab, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { StaticImage } from 'gatsby-plugin-image'
import { classNames, links, socials } from '../utils'
import '../styles/pages/index.css'

const IndexPage = () => {
  const [focusRing] = useState(false)
  const headers = ['About', 'Skills', 'Experience']
  const content = [<About />, <Skills />, <Experience />]

  return (
    <Layout location="Home" background={false}>
      <Seo title="Home" />
      <div className="home-wrapper">
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
      </div>
    </Layout>
  )
}

export default IndexPage

const About = () => {
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
            <li key={`detail-${index}`}>
              <Icon icon="codicon:triangle-right" className="inline text-secondary-900 dark:text-secondary-900" />
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
  type Skill = {
    name: string
    score: string
  }

  const skills: Skill[] = [
    { name: 'HTML/CSS', score: '95' },
    { name: 'Javascript', score: '90' },
    { name: 'NodeJS', score: '90' },
    { name: 'ReactJS', score: '100' },
    { name: 'GatsbyJS', score: '100' },
    { name: 'TailwindCSS', score: '95' },
    { name: 'Bootstrap', score: '90' },
    { name: 'MaterialUI', score: '100' },
    { name: 'PHP/Laravel', score: '60' },
    { name: 'Git', score: '90' },
    { name: 'Docker', score: '80' },
    { name: 'C/C++', score: '70' },
    { name: 'Java', score: '75' },
    { name: 'Python', score: '80' },
    { name: 'SQL', score: '70' },
    { name: 'Haskell', score: '60' },
    { name: 'Prolog', score: '50' },
    { name: 'Flutter', score: '40' },
  ]

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

        <article className="block text-sm font-normal">
          <div className="mt-2 grid grid-cols-1 grid-rows-1 gap-y-4 gap-x-6 md:grid-cols-3 md:grid-rows-3">
            {skills.map((skill: Skill, skillIdx: number) => (
              <div key={`skill-${skillIdx}`} className="space-y-1">
                <div className="flex items-center justify-between font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.score}%</span>
                </div>

                <div className="relative h-[10px] w-full">
                  <div
                    style={{ width: `${skill.score}%` }}
                    className={`${
                      skill.score === '100' ? 'rounded-xl' : 'rounded-l-xl'
                    } absolute top-0 z-10 h-[10px] bg-primary-900 dark:bg-secondary-900`}
                  ></div>
                  <div className="absolute top-0 h-[10px] w-full rounded-xl bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </article>
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
    <div className="flex flex-wrap items-center justify-center gap-1 text-gray-400 dark:text-gray-300 md:mt-0">
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
