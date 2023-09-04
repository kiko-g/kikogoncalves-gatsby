import React from 'react'
import Socials from './Socials'
import { Link } from 'gatsby'
import classNames from 'classnames'

type GroupType = {
  title: string
  entries: EntryType[]
}

type EntryType = {
  headline: string
  date?: string
  description?: JSX.Element
  bulletPoints?: JSX.Element[]
}

const Resume = () => {
  const imagePath = '/images/hero/hero3.jpg'
  const groups: GroupType[] = [
    {
      title: 'Education',
      entries: [
        {
          headline: 'Primary Education',
          date: 'Set 2003 - Jul 2014',
          description: <span>Colégio Nossa Senhora de Lourdes, Porto, Portugal</span>,
        },
        {
          headline: 'High School',
          date: 'Set 2014 - Jun 2017',
          description: <span>Escola Secundária Clara de Resende, Porto, Portugal</span>,
        },
        {
          headline: 'Bachelor in Informatics and Computer Engineering',
          date: 'Set 2018 - Jan 2022',
          description: <span>Faculdade de Engenharia da Universidade do Porto, MIEIC</span>,
          bulletPoints: [
            <span>
              Completed degree averaging <strong>15/20</strong>
            </span>,
          ],
        },
        {
          headline: 'Master in Informatics and Computer Engineering',
          date: 'Set 2021 - Present',
          description: <span>Faculdade de Engenharia da Universidade do Porto, MIEIC</span>,
          bulletPoints: [
            <span>
              Completed degree averaging <strong>??/20</strong>
            </span>,
          ],
        },
      ],
    },
    {
      title: 'Summary',
      entries: [
        {
          headline: 'Francisco Gonçalves, 24',
          description: <span>Software Engineering Student</span>,
          bulletPoints: [<span>FEUP, Porto, Portugal</span>],
        },
      ],
    },
    {
      title: 'Languages',
      entries: [
        {
          headline: 'Portuguese Native Speaker',
        },
        {
          headline: 'Cambridge C1 Advanced Certificate',
          date: 'Dec 2016',
        },
      ],
    },
    {
      title: 'Experience',
      entries: [
        {
          headline: 'Professional experience',
          bulletPoints: [
            <span>Member of NIAEFEUP (Informatics Student Branch @ FEUP)</span>,
            <span>Intern at Critical Manufacturing</span>,
          ],
        },
        {
          headline: 'Other experiences',
          bulletPoints: [
            <span>5 Caminhos de Santiago</span>,
            <span>Erasmus Student in Espoo, Finland @ Aalto University SCI</span>,
            <span>Volunteering focused on visiting and helping elderly people </span>,
          ],
        },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-x-4 rounded-2xl bg-white p-4 text-2xl transition md:gap-x-8">
      <div className="order-2 col-span-12 sm:order-1 sm:col-span-6 md:col-span-7 lg:col-span-9 xl:col-span-9 2xl:col-span-9">
        <div className="hidden text-xl font-semibold uppercase tracking-wide text-primary dark:text-secondary md:flex">
          Resume
        </div>
        <div className="mt-0 text-sm font-normal text-gray-600 dark:text-light md:text-base">
          <h2>
            Check out my{' '}
            <a className="link" target="_blank" href="https://www.linkedin.com/in/kikogoncalves/">
              linkedin
            </a>{' '}
            page to find out more about my path, carrer and technical profile or head over to the{' '}
            <Link className="link" to="/cv">
              CV page
            </Link>
            .
          </h2>

          <div className="flex max-h-full flex-col flex-wrap gap-x-6 gap-y-3 p-2 lg:max-h-[32rem]">
            {groups.map((group: GroupType, groupIdx: number) => (
              <Group key={`group-${groupIdx}`} group={group} />
            ))}
          </div>
        </div>
      </div>

      <div className="order-1 col-span-12 h-min sm:order-2 sm:col-span-6 md:col-span-5 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
        <div className="aspect-square">
          <img src={imagePath} className="h-full w-full object-cover" alt="profile-picture" />
        </div>
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

type GroupProps = {
  group: GroupType
}

const Group = ({ group }: GroupProps) => (
  <div className="mt-0.5">
    <h1 className="-ml-2 mb-2 font-headings text-xl font-bold text-primary dark:text-secondary">
      {group.title}
    </h1>
    <ol className="relative border-l-2 border-primary dark:border-secondary">
      {group.entries.map((entry, entryIdx) => (
        <li
          key={`${group.title}-entry-${entryIdx}`}
          className={`relative ${entryIdx === group.entries.length - 1 ? '' : 'pb-4'}`}
        >
          <div className="ml-5">
            <span
              className="absolute left-[-8.8px] -top-[1px] flex h-4 w-4 rounded-full border-2 
              border-primary bg-white dark:border-secondary dark:bg-white"
            />

            <div className={classNames('flex flex-col', entry.date ? 'space-y-1' : 'space-y-0.5')}>
              <span
                className="mb-1 flex items-center text-base font-semibold uppercase 
              leading-none tracking-tight text-gray-900 dark:text-white"
              >
                {entry.headline}
              </span>

              {entry.date ? (
                <div className="rounded-xl text-xs font-semibold tracking-tight">
                  <span className="my-1 rounded bg-primary py-0.5 px-1 text-white dark:bg-secondary">
                    {entry.date}
                  </span>
                </div>
              ) : null}

              {entry.description ? (
                <p className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  {entry.description}
                </p>
              ) : null}

              {entry.bulletPoints ? (
                <ul className="ml-4 mt-1 list-disc text-sm">
                  {entry.bulletPoints.map((bullet, bulletIdx) => (
                    <li key={`entry-${entryIdx}-bullet-${bulletIdx}`}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </div>
)

export default Resume
