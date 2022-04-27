import React, { useState, useEffect } from 'react'
import Seo from '../components/Seo'
import { Link } from 'gatsby'
import { Icon } from '@iconify/react'
import { Layout } from '../layout/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Tab, Transition } from '@headlessui/react'
import { classNames, links, socials } from '../utils'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import '../styles/index.css'

const IndexPage = () => {
  const [focusRing] = useState(false)
  const headers = ['About', 'Skills', 'Experience']
  const content = [<About />, <Skills />, <Experience />]
  const [selectedIndex, setSelectedIndex] = useState(0)

  const nextTab = () => {
    setSelectedIndex((selectedIndex + 1) % content.length)
  }

  return (
    <Layout location="Home" background={false}>
      <Seo title="Home" />
      <div className="index-wrapper">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
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
            {content.map((content: JSX.Element, index: number) => (
              <Tab.Panel key={index} className={classNames('tab-panel', focusRing ? 'tab-focus-ring' : '')}>
                {content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="mt-4 flex items-center justify-between">
          <div className="space-x-5"></div>
          <div>
            <Link
              to="/me"
              className="inline-flex rounded bg-gradient-to-r from-tertiary via-indigo-400 to-secondary p-[2px] transition focus:outline-none focus:ring active:text-opacity-75"
            >
              <span
                className="hover flex items-center justify-center space-x-2 rounded-sm bg-white
                px-6 py-3 font-medium transition hover:bg-transparent hover:text-white dark:text-gray-800 dark:hover:text-white"
              >
                <span>See more</span>
                <ArrowNarrowRightIcon className="inline-flex h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
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
    { key: 'Occupation', value: 'Software Engineering Student @ FEUP, MEIC' },
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
              <Icon icon="codicon:triangle-right" className="inline text-primary-light dark:text-blue-500" />
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
    { name: 'JS/TS', score: '85' },
    { name: 'NodeJS', score: '85' },
    { name: 'ReactJS', score: '95' },
    { name: 'GatsbyJS', score: '80' },
    { name: 'TailwindCSS', score: '95' },
    { name: 'Bootstrap', score: '85' },
    { name: 'MaterialUI', score: '80' },
    { name: 'PHP/Laravel', score: '65' },
    { name: 'Flutter/Dart', score: '60' },
    { name: 'Git', score: '90' },
    { name: 'Docker', score: '75' },
    { name: 'C/C++', score: '75' },
    { name: 'Java', score: '80' },
    { name: 'Python', score: '75' },
    { name: 'SQL', score: '70' },
    { name: 'Haskell', score: '60' },
    { name: 'Prolog', score: '50' },
    { name: 'Kotlin', score: '25' },
  ]

  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Skills</div>
        <div className="tab-inner-prose">
          <p>
            Check out my{' '}
            <a className="tab-inner-link" target="_blank" rel="noreferrer" href={links.github}>
              github
            </a>{' '}
            page to find out more about my skills and portfolio. Below you can find a set of programming languages and
            technologies I have worked with, associated with a mildly accurate scale that measures familiarity,
            comfortability, and frequency of use.
          </p>
        </div>

        <article className="mt-6 block font-code text-sm font-normal">
          <div className="mt-2 grid grid-cols-1 gap-y-4 gap-x-6 md:grid-cols-3">
            {skills.map((skill: Skill, skillIdx: number) => (
              <div key={`skill-${skillIdx}`} className="space-y-1">
                <div className="flex items-center justify-between font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.score}%</span>
                </div>

                <div className="relative h-[10px] w-full">
                  <div
                    style={{ width: `${skill.score}%` }}
                    className="absolute top-0 z-10 h-[10px] bg-gradient-to-r from-primary to-primary-light dark:from-primary dark:to-primary-light"
                  ></div>
                  <div className="absolute top-0 h-[10px] w-full bg-gray-200"></div>
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
