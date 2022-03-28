import React, { useState } from 'react'
import { classNames } from '../utils'
import { Tab } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {}

export const Hero: React.FC<Props> = () => {
  const [focusRing] = useState(false)
  const headers = ['About', 'Skills', 'Experiences']
  const content = [<About />, <About />, <About />]

  return (
    <div className="w-full px-4 py-16 sm:px-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-lilac/50 dark:bg-lilac/25 p-1">
          {headers.map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 font-medium uppercase leading-5 tracking-wider text-lilac',
                  focusRing ? 'ring-white ring-opacity-60 ring-offset-2 ring-offset-lilac/75 focus:outline-none focus:ring-2' : '',
                  selected ? 'bg-white shadow' : 'text-[#fff] hover:bg-white/[0.12]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {content.map((content, index) => (
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white p-3',
                focusRing ? 'ring-white ring-opacity-60 ring-offset-2 ring-offset-lilac/75 focus:outline-none focus:ring-2' : ''
              )}
            >
              <About />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export const About: React.FC<Props> = () => {
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
    { key: 'Degree', value: 'BSc in Computer Eng' },
  ]

  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-8 rounded-2xl p-2 text-2xl">
      <div className="col-span-7 mr-2 sm:col-span-8 md:col-span-9">
        <div className="text-xl font-semibold uppercase tracking-wide text-lilac/75">About</div>
        <span className="mt-1 block text-lg font-medium leading-tight text-gray-800">
          Software Engineering Student @{' '}
          <a
            className="text-lilac hover:underline"
            target="_blank"
            rel="noreferrer"
            href={
              'https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_PLANOS_ESTUDOS_VIEW?pv_plano_id=31204&pv_ano_lectivo=2021'
            }
          >
            FEUP-MEIC
          </a>
        </span>

        <p className="mt-2 text-sm font-normal text-gray-500 md:text-lg">
          {about.general}
          {about.personal}
        </p>

        <ul className="mt-3 text-sm text-gray-700 md:text-lg">
          {details.map((item, index) => (
            <li key={`detail-${index}`}>
              <Icon icon="codicon:triangle-right" color="#9f7aea" className="inline" />
              <strong>{item.key}</strong>:&nbsp;<span className="font-normal text-gray-500">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-5 sm:col-span-4 md:col-span-3">
        <StaticImage
          src={`../../../static/images/hero1.jpg`}
          className="mb-2 rounded-lg shadow-xl"
          alt="profile-picture"
        />
        <h1 className="mb-2 text-center text-xl font-bold leading-5 tracking-tight text-gray-800 md:text-2xl">
          Francisco Gonçalves
        </h1>
      </div>
    </div>
  )
}
