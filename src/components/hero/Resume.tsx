import React from 'react'
import Socials from './Socials'

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
  const groups: GroupType[] = [
    {
      title: 'Summary',
      entries: [
        {
          headline: 'Francisco Gonçalves, 22',
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
          headline: 'Cambridge C2 Advanced Certificate',
          date: 'Dec 2016',
        },
      ],
    },
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
              Current cumulative average <strong>17.00/20</strong>
            </span>,
          ],
        },
      ],
    },
    {
      title: 'Experience',
      entries: [
        {
          headline: 'Professional experience',
          bulletPoints: [
            <span>
              Member of <a>NIAEFEUP</a> (Informatics Student Branch @ FEUP)
            </span>,
          ],
        },
        {
          headline: 'Other experiences',
          bulletPoints: [
            <span>5 Caminhos de Santiago</span>,
            <span>Volunteering focused on visiting and helping elderly people </span>,
          ],
        },
      ],
    },
  ]

  return (
    <div className="tab-panel-inner">
      <div className="tab-panel-inner-left">
        <div className="tab-inner-header">Resume</div>
        <div className="tab-inner-prose">
          <h2>
            Check out my{' '}
            <a className="link" target="_blank" href="https://www.linkedin.com/in/kikogoncalves/">
              linkedin
            </a>{' '}
            page to find out more about my path, carrer and technical profile
          </h2>

          <div className="mt-1 grid grid-cols-1 gap-3 px-2 xl:grid-cols-2">
            {groups.map((group: GroupType, groupIdx: number) => (
              <Group key={`group-${groupIdx}`} group={group} />
            ))}
          </div>
        </div>
      </div>

      <div className="tab-panel-inner-right">
        <img src={'images/hero/hero3.jpg'} className="tab-inner-image" alt="profile-picture" />
        <div className="tab-inner-image-subbox">
          <h2 className="tab-inner-image-header">Francisco Gonçalves</h2>
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
  <div className="mt-2">
    <h1 className="-ml-2 mb-2 font-headings text-xl font-bold text-primary dark:text-blue-500">{group.title}</h1>
    <ol className="relative border-l-2 border-primary dark:border-primary-light">
      {group.entries.map((entry, entryIdx) => (
        <li
          key={`${group.title}-entry-${entryIdx}`}
          className={`relative ${entryIdx === group.entries.length - 1 ? '' : 'pb-4'}`}
        >
          <div className="ml-5">
            <span
              className="absolute left-[-8.8px] -top-[1px] flex h-4 w-4 rounded-full border-2 
              border-primary bg-white dark:border-primary-light dark:bg-white"
            />

            <div className="flex flex-col space-y-1.5">
              <span
                className="mb-1 flex items-center text-base font-semibold uppercase 
              leading-none tracking-tight text-gray-900 dark:text-white"
              >
                {entry.headline}
              </span>

              {entry.date ? (
                <div className="rounded-xl text-xs font-semibold tracking-tight">
                  <span className="rounded bg-blue-500 px-2 py-1 text-white">{entry.date}</span>
                </div>
              ) : null}

              {entry.description ? (
                <p className="text-sm font-normal text-gray-500 dark:text-gray-300">{entry.description}</p>
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
