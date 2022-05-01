import React from 'react'
import Socials from './Socials'
import { links } from '../../utils'

type Props = {}

const Skills = ({}: Props) => {
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
                    className="absolute top-0 z-10 h-[10px] bg-gradient-to-r from-tertiary via-indigo-400 to-secondary"
                  ></div>
                  <div className="absolute top-0 h-[10px] w-full bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="tab-panel-inner-right">
        <img src={'/images/hero/hero2.jpg'} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Skills
