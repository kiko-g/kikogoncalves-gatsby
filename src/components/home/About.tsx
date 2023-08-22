import React from 'react'
import Socials from './Socials'
import { calculateAge, links } from '../../utils'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

type Props = {}

const About = ({}: Props) => {
  const details = [
    { key: 'Age', value: calculateAge() },
    { key: 'City', value: 'Porto, Portugal' },
    { key: 'Birthday', value: '3 August 1999' },
    { key: 'Degree', value: 'Masters in Computer Engineering' },
    { key: 'Occupation', value: 'Software Engineer' },
  ]

  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-x-4 rounded-2xl bg-white p-4 text-2xl transition dark:bg-white/5 md:gap-x-8">
      <div className="order-2 col-span-12 sm:order-1 sm:col-span-6 md:col-span-7 lg:col-span-9 xl:col-span-9 2xl:col-span-9">
        <div className="hidden text-xl font-semibold uppercase tracking-wide text-primary dark:text-secondary md:flex">
          About
        </div>
        <h3 className="mt-3 block text-lg font-medium leading-tight md:mt-1">Software Engineer</h3>

        <article className="mt-0 text-sm font-normal text-gray-600 dark:text-light md:text-base">
          <p className="mb-1">
            Hi, I'm Francisco. I'm a Software Engineer based in Porto. I have a Masters Degree in
            Informatics and Computer Engineering, from FEUP, the Factulty of Engineering of the
            University of Porto (
            <a className="link" target="_blank" rel="noreferrer" href={links.meic}>
              FEUP-MEIC
            </a>
            ).
          </p>

          <p className="mb-1">
            I have a great passion for software engineering as a whole with a special interest in
            frontend development and data science. On the more personal side of things, I would
            describe myself as a passionate person, who believes in getting better every day and
            finding zeal in things. My interests are mostly music, gaming, football, media, and
            entertainment. As for hobbies, I often play the guitar, sing, game, program stuff, and
            exercise.
          </p>

          <p className="mb-1">
            My preferred and best technologies are{' '}
            <strong>React.js, Javascript, Typescript, Next.js and TailwindCSS</strong>. If you're
            interested in my profile{' '}
            <a className="link" rel="noreferrer" href={links.linkedin} target="_blank">
              reach me on LinkedIn
            </a>
            , as I'm searching for a frontend or full-stack position, preferably using React! ‼️
          </p>
        </article>

        <ul className="mt-3 text-sm md:text-base">
          {details.map((item, index) => (
            <li key={`detail-${index}`} className="flex items-center gap-x-1 md:gap-x-2">
              <ChevronRightIcon className="flex-0 h-4 w-4 text-primary dark:text-secondary" />
              <strong className="text-gray-700 dark:text-light">{item.key}</strong>
              <span>&middot;</span>
              <span className="flex-1 truncate font-normal text-gray-500 dark:text-gray-200">
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 col-span-12 h-min sm:order-2 sm:col-span-6 md:col-span-5 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
        <img src={'/images/hero/hero17.jpg'} className="aspect-square" alt="profile-picture" />
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

export default About
