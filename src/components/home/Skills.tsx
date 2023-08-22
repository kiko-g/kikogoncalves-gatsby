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
    <div className="grid grid-cols-12 grid-rows-1 gap-x-4 rounded-2xl bg-white p-4 text-2xl transition dark:bg-white/5 md:gap-x-8">
      <div className="order-2 col-span-12 sm:order-1 sm:col-span-6 md:col-span-7 lg:col-span-9 xl:col-span-9 2xl:col-span-9">
        <div className="hidden text-xl font-semibold uppercase tracking-wide text-primary dark:text-secondary md:flex">
          Skills
        </div>
        <div className="mt-0 text-sm font-normal text-gray-600 dark:text-light md:text-base">
          <p className="my-1">
            Check out my{' '}
            <a className="link" target="_blank" rel="noreferrer" href={links.github}>
              github
            </a>{' '}
            page to find out more about my skills and portfolio. Below you can find a set of
            programming languages and technologies I have worked with, associated with a mildly
            accurate scale that measures <strong>familiarity</strong>,{' '}
            <strong>comfortability</strong>, and <strong>frequency of use</strong>.
          </p>
        </div>

        <article className="mt-6 block font-code text-sm font-normal">
          <div className="grid grid-cols-1 gap-y-4 gap-x-6 md:grid-cols-3">
            {skills.map((skill: Skill, skillIdx: number) => (
              <div key={`skill-${skillIdx}`} className="space-y-0.5">
                <div className="flex items-center justify-between font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.score}%</span>
                </div>

                <div className="relative h-[10px] w-full">
                  <div
                    style={{ width: `${skill.score}%` }}
                    className="absolute top-0 z-10 h-[10px] bg-gradient-to-r from-sky-500 via-indigo-400 to-violet-400"
                  ></div>
                  <div className="absolute top-0 h-[10px] w-full bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="order-1 col-span-12 h-min sm:order-2 sm:col-span-6 md:col-span-5 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
        <img src={'/images/hero/hero2.jpg'} className="tab-inner-image" alt="profile-picture" />
        <div className="flex flex-col items-end gap-1">
          <h2 className="my-0.5 flex-1 text-base font-bold tracking-tighter md:text-left md:text-base xl:text-lg">
            Francisco Gonçalves
          </h2>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Skills
