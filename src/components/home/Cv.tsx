import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { GithubIcon, LinkedinIcon } from '../../components/icons'
import {
  ArrowTopRightOnSquareIcon,
  GlobeEuropeAfricaIcon,
  InboxArrowDownIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

export function Cv() {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-4 rounded-xl bg-white p-4 dark:bg-white/5 lg:gap-8">
      <CvSidebar />
      <div className="order-2 col-span-4 flex h-full w-full flex-col gap-8 lg:order-1 lg:col-span-3">
        <CvEducation />
        <CvExperiences />
        <CvProjects />
        <CvSkills />
      </div>
    </div>
  )
}

function CvSidebar() {
  const contacts = [
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      element: <span>(+351) 918271105</span>,
    },
    {
      icon: <InboxArrowDownIcon className="h-5 w-5" />,
      element: <Link to="mailto:kikojpgoncalves@gmail.com">kikojpgoncalves@gmail.com</Link>,
    },
    {
      icon: <GlobeEuropeAfricaIcon className="h-5 w-5" />,
      element: <Link to="/">kikogoncalves.com</Link>,
    },
    {
      icon: <GithubIcon className="h-5 w-5" />,
      element: (
        <Link target="_blank" to="https://github.com/kiko-g">
          kiko-g
        </Link>
      ),
    },
    {
      icon: <LinkedinIcon className="h-5 w-5" />,
      element: (
        <Link target="_blank" to="https://linkedin.com/in/kikogoncalves">
          kikogoncalves
        </Link>
      ),
    },
  ]

  return (
    <div className="order-1 col-span-4 flex h-full w-full flex-col items-start justify-start gap-2 rounded-xl bg-slate-100 px-4 py-2 dark:bg-white/10 lg:order-2 lg:col-span-1 lg:gap-3">
      <header className="mt-2 flex w-full flex-col gap-3">
        <img
          src={'/images/hero/hero0.jpg'}
          className="aspect-square w-full rounded-lg"
          alt="profile-picture"
        />
        <div>
          <h2 className="text-lg font-normal tracking-wide lg:text-xl">
            <strong>Francisco</strong> <span>Gonçalves</span>
          </h2>
          <h4 className="text-sm font-normal tracking-tighter lg:text-sm xl:text-base">
            Software Engineering Student @{' '}
            <Link to="https://fe.up.pt" className="link" target="_blank">
              FEUP
            </Link>
          </h4>
          <h5 className="text-xs font-medium tracking-tighter lg:-mt-0.5 lg:text-sm">
            Porto, Portugal
          </h5>
        </div>
      </header>

      <ul className="mt-0 w-full space-y-0.5 px-1 py-1 text-[0.95rem] font-normal">
        {contacts.map((contact, contactIdx) => (
          <li key={`cv-contact-${contactIdx}`} className="flex items-center justify-start gap-1.5">
            {contact.icon}
            <span className="hover:text-[#0a66c2] hover:underline hover:opacity-90 dark:hover:text-blue-500">
              {contact.element}
            </span>
          </li>
        ))}
      </ul>

      <Link
        target="_blank"
        rel="noopener"
        to="/cv.pdf"
        className="w-full rounded bg-blue-600 px-3 py-2 text-center font-normal capitalize tracking-tight text-white transition hover:cursor-pointer hover:opacity-70 dark:bg-blue-500"
      >
        View PDF version
      </Link>
    </div>
  )
}

type GroupEntryType = {
  shown: boolean
  startDate: string
  endDate: string | null
  location: string
  title: string
  github: string | null
  external: string | null
  linkedin: string | null
  teamSize?: number
  subtitle: string
  externalSub: string
  description: React.ReactNode | null
}

function CvGroup({ name, items }: { name: string; items: GroupEntryType[] }) {
  return (
    <div className="flex flex-col gap-y-4">
      <header className="flex items-center gap-3">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-600 dark:text-blue-500">{name.substring(0, 3)}</span>
          <span>{name.substring(3)}</span>
        </h2>
        <div className="h-[1px] w-full bg-gray-300"></div>
      </header>

      <div className="space-y-6 lg:space-y-8">
        {items
          .filter(({ shown }) => shown === true)
          .sort(({ startDate: a }, { startDate: b }) => {
            const firstDate = new Date(a)
            const secondDate = new Date(b)
            return secondDate.getTime() - firstDate.getTime()
          })
          .map((item, itemIdx) => {
            const firstDate = new Date(item.startDate)
            const secondDate = item.endDate === null ? null : new Date(item.endDate)

            let isOngoing = false
            let date = firstDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            date += ' - '
            if (secondDate === null) {
              date += 'Present'
              isOngoing = true
            } else {
              date += secondDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
            }

            return (
              <div
                key={`cv-${name}-${itemIdx}`}
                className="flex flex-col items-start justify-start gap-2 font-normal lg:flex-row"
              >
                <div className="mx-auto ml-3 lg:ml-5">
                  <div className="flex items-start gap-1.5 lg:items-center">
                    <h3 className="text-base font-bold dark:text-white lg:text-lg">{item.title}</h3>
                    {item.external && (
                      <Link
                        rel="noopener"
                        target="_blank"
                        to={item.external}
                        className="text-blue-600 hover:opacity-75 dark:text-white"
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </Link>
                    )}
                    {item.github && (
                      <Link
                        rel="noopener"
                        target="_blank"
                        to={item.github}
                        className="text-blue-600 hover:opacity-75 dark:text-white"
                      >
                        <GithubIcon />
                      </Link>
                    )}
                    {item.linkedin && (
                      <Link
                        rel="noopener"
                        target="_blank"
                        to={item.linkedin}
                        className="text-blue-600 hover:opacity-75 dark:text-white"
                      >
                        <LinkedinIcon />
                      </Link>
                    )}
                  </div>

                  <div className="flex items-start gap-1.5 lg:items-center">
                    <h5 className="tracking-tighter">{item.subtitle}</h5>
                    {item.externalSub && (
                      <Link
                        rel="noopener"
                        target="_blank"
                        to={item.externalSub}
                        className="text-blue-600 hover:opacity-75 dark:text-white"
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </Link>
                    )}
                  </div>

                  <div className="w-full flex-1 self-stretch">{item.description}</div>
                </div>

                <div className="flex w-full flex-row justify-end gap-2 text-xs lg:w-min lg:flex-col lg:items-end lg:gap-0 lg:text-sm">
                  <span
                    className={classNames(
                      'flex items-center gap-x-2 whitespace-nowrap',
                      isOngoing ? 'font-bold' : ''
                    )}
                  >
                    <span>{date}</span>
                    <span>{isOngoing ? '⏳' : '✅'}</span>
                  </span>
                  <span className="whitespace-nowrap font-medium text-blue-600 dark:text-blue-500">
                    {item.location}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

function CvEducation() {
  return (
    <CvGroup
      name="Education"
      items={[
        {
          shown: true,
          startDate: '2003-09-15',
          endDate: '2014-07-27',
          location: 'Porto, Portugal',
          title: 'Colégio Nossa Senhora de Lourdes (CNSL)',
          github: '',
          external: '',
          linkedin: '',
          subtitle: 'Pre, Elementary and Middle School',
          externalSub: '',
          description: null,
        },
        {
          shown: true,
          startDate: '2015-09-15',
          endDate: '2017-06-30',
          location: 'Porto, Portugal',
          title: 'Escola Secundária Clara de Resende',
          github: '',
          external: '',
          linkedin: '',
          subtitle: 'High school (Science and Technologies program)',
          externalSub: '',
          description: null,
        },
        {
          shown: true,
          startDate: '2018-09-23',
          endDate: '2022-01-23',
          location: 'Porto, Portugal',
          title: 'Faculty of Engineering of the University of Porto (FEUP)',
          github: '',
          external: 'https://fe.up.pt',
          linkedin: '',
          subtitle: 'Bachelor in Informatics and Computer Engineering',
          externalSub:
            'https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31224&pv_ano_lectivo=2021',
          description: (
            <ul className="list-inside list-disc">
              <li>Completed degree with cumulative GPA 15/20</li>
              <li>
                Relevant coursework: Databases, Algorithms and Data Structures, Web App Development,
                Artificial Intelligence, Computer Graphics and Software Engineering
              </li>
            </ul>
          ),
        },
        {
          shown: true,
          startDate: '2021-09-15',
          endDate: '2023-07-18',
          location: 'Porto, Portugal',
          title: 'Faculty of Engineering of the University of Porto (FEUP)',
          github: '',
          external: 'https://fe.up.pt',
          linkedin: '',
          subtitle: 'Master in Informatics and Computer Engineering',
          externalSub:
            'https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_PLANOS_ESTUDOS_VIEW?pv_plano_id=31204&pv_ano_lectivo=2022',
          description: (
            <ul className="list-inside list-disc">
              <li>Completed degree with cumulative GPA of 18/20</li>
              <li>
                Relevant coursework: Full Stack Development, IOT for factory management, P2P
                Timeline, Semantic Web App Development, Software Architecture, Software Quality and
                Testing.
              </li>
            </ul>
          ),
        },
      ]}
    />
  )
}

function CvExperiences() {
  return (
    <CvGroup
      name="Experiences"
      items={[
        {
          shown: true,
          startDate: '2014-02-15',
          endDate: null,
          location: 'Miscellaneous',
          title: 'Other experiences',
          github: '',
          external: '',
          linkedin: '',
          subtitle: 'Participant',
          externalSub: '',
          description: (
            <ul className="list-inside list-disc">
              <li>5 Camiños de Santiago</li>
              <li>Interrail across Europe</li>
              <li>Volunteering focused on visiting and helping elderly people</li>
            </ul>
          ),
        },
        {
          shown: true,
          startDate: '2020-11-01',
          endDate: null,
          location: 'Porto, Portugal',
          title: 'NIAEFEUP - Informatics Engineering Student Branch @ FEUP',
          github: 'https://github.com/NIAEFEUP',
          external: 'https://ni.fe.up.pt',
          linkedin: 'https://www.linkedin.com/company/nifeup/mycompany',
          subtitle: 'Active Member',
          externalSub: '',
          description: (
            <ul className="list-inside list-disc">
              <li>Contributed a variety of projects and co-organized events.</li>
            </ul>
          ),
        },
        {
          shown: true,
          startDate: '2022-08-29',
          endDate: '2022-12-18',
          location: 'Espoo, Finland',
          title: 'Aalto University School of Science',
          github: '',
          external: 'https://www.aalto.fi/en/school-of-science',
          linkedin: 'https://www.linkedin.com/school/aalto-university',
          subtitle: 'Erasmus Student',
          externalSub: '',
          description: (
            <ul className="list-inside list-disc">
              <li>
                Studied computer science abroad at Aalto University, in Espoo, Finland as an
                exchange student part of the Erasmus program.
              </li>
            </ul>
          ),
        },
        {
          shown: true,
          startDate: '2023-02-06',
          endDate: '2023-07-01',
          location: 'Maia, Porto, Portugal',
          title: 'Intern at Critical Manufacturing',
          github: 'https://github.com/kiko-g/usability-dashboard-mes',
          external: 'https://www.criticalmanufacturing.com/',
          linkedin: 'https://www.linkedin.com/company/critical-manufacturing',
          subtitle: 'Product Development Team Intern',
          externalSub: '',
          description: (
            <ul className="list-inside list-disc">
              <li>
                Interned at Critical Manufacturing in the context of a dissertation for my Masters
                degree in Informatics and Computing Engineering.
              </li>
              <li>
                Interned as a member of the Product Development Team, working on developing a system
                to help assess the usability of the company&apos;s Manufacturing Execution System
                (MES).
              </li>
            </ul>
          ),
        },
      ]}
    />
  )
}

function CvProjects() {
  return (
    <CvGroup
      name="Projects"
      items={[
        // bagr ui
        {
          shown: true,
          startDate: '2023-07-17',
          endDate: null,
          location: 'Porto, Portugal',
          title: 'Bagr.UI - UI Components library for React, Typescript, and TailwindCSS',
          github: 'https://github.com/kiko-g/bagr-ui',
          external: 'https://bagr-ui.vercel.app',
          linkedin: '',
          subtitle: 'Next.js, React, Typescript, TailwindCSS',
          externalSub: '',
          teamSize: 1,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Developed a website to showcase reusable React TSX components combining purposes and
                methods from other components libraries.
              </li>
            </ul>
          ),
        },
        // cmf ux
        {
          shown: true,
          startDate: '2023-02-06',
          endDate: '2023-07-28',
          location: 'Maia, Porto, Portugal',
          title: "Improving Usability of Critical Manufacturing's MES: Custom UX Dashboard for MES",
          github: 'https://github.com/kiko-g/usability-dashboard-mes/',
          external: 'https://usability-dashboard-mes.vercel.app/',
          linkedin: '',
          subtitle: 'Angular 15, Matomo, MySQL, Docker, Typescript, React, Next.js, TailwindCSS',
          externalSub: '',
          teamSize: 1,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Project serves as a tool for inspecting usability metrics in Critical
                Manufacturing&apos;s Manufacturing Execution System (MES).
              </li>
              <li>
                Developed a customized dashboard to display custom insights for components inside
                MES, a Angular application used for managing indtustrial shop floors.
              </li>
              <li>
                Dashboard acts as a democratization of the improvement process of UX aspects of
                Critical Manufacturing as we provide scores for components and compose key metrics
                inside said components.
              </li>
              <li>
                Used Matomo to collect general metrics and track events to later access on
                client-side of the dashboard.
              </li>
              <li>
                Wrote a dissertation around this project with the title{' '}
                <strong>Analytics and Usability Metrics for Single-Page Applications</strong>,
                avaliable{' '}
                <Link className="link" target="_blank" to="/dissertation.pdf">
                  here
                </Link>
                .
              </li>
            </ul>
          ),
        },
        // guerner
        {
          shown: true,
          startDate: '2023-01-24',
          endDate: null,
          location: 'Gaia, Porto, Portugal',
          title: 'Guerner & Irmãos - Agrotextiles and fabrics company website',
          github: 'https://github.com/kiko-g/guerner/',
          external: 'https://guerner.vercel.app/',
          linkedin: '',
          subtitle: 'React, Typescript, Gatsby 5, MDX, GraphQL, TailwindCSS',
          externalSub: '',
          teamSize: 1,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Created a marketing and display website for Guerner \& Irmãos, offering
                high-performance textiles, technical fabrics, and quality building materials.
                Utilized GraphQL for product and service display.
              </li>
            </ul>
          ),
        },
        // tts
        {
          shown: true,
          startDate: '2022-03-25',
          endDate: '2022-08-15',
          location: 'Porto, Porto, Portugal',
          title: 'TTS - Time Table Selector for UPorto Students',
          github: 'https://github.com/NIAEFEUP/tts-revamp-fe',
          external: 'https://ni.fe.up.pt/tts/',
          linkedin: '',
          subtitle: 'React, TypeScript, TailwindCSS, Docker',
          externalSub: '',
          teamSize: 3,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Developed a platform for students of University of Porto to build their course
                schedule options for the semester.
              </li>
            </ul>
          ),
        },
        // robin
        {
          shown: true,
          startDate: '2022-02-15',
          endDate: '2022-07-10',
          location: 'Porto, Porto, Portugal',
          title: "Virtual Assistant for Critical Manufacturing's Manufacturing Execution System",
          github: '',
          external: 'https://robinlgp.netlify.app/about/#showcase',
          linkedin: '',
          subtitle: 'Typescript, Angular, Python, Flask, SpaCy, Docker',
          externalSub: '',
          teamSize: 8,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Developed a virtual assistant to facilitate navigation and interaction with Critical
                Manufacturing&apos;s Execution System.
              </li>
              <li>
                Created a small startup and branding around the adopted project:{' '}
                <Link to="https://robinlgp.netlify.app/" target="_blank" className="link">
                  Robin
                </Link>
                .
              </li>
            </ul>
          ),
        },
        // wsdl
        {
          shown: true,
          startDate: '2021-11-15',
          endDate: '2022-01-15',
          location: 'Porto, Porto, Portugal',
          title: 'Health Checker - Semantic Web Data for Better Health Information"',
          github: 'https://github.com/kiko-g/health-checker',
          external: 'https://health-checker.netlify.app',
          linkedin: '',
          subtitle: 'NodeJS, Express, React, TailwindCSS, SPARQL',
          externalSub: '',
          teamSize: 4,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Developed a health information platform using DBPedia and Bioportal datasets,
                providing accurate and approved details about diseases.
              </li>
            </ul>
          ),
        },
        // ds
        {
          shown: true,
          startDate: '2021-10-15',
          endDate: '2022-01-15',
          location: 'Porto, Porto, Portugal',
          title: 'Internet of Everything - "Eveything is connected. Not just the devices."',
          github: 'https://github.com/kiko-g/internet-of-everything',
          external: 'https://github.com/kiko-g/internet-of-everything#demo',
          linkedin: '',
          subtitle: 'Docker, Javascript, Java, Python, React, TailwindCSS',
          externalSub: '',
          teamSize: 20,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Collaboratively developed a factory management and maintenance platform simulator.
                Used LeSS Agile framework.
              </li>
              <li>
                Responsible for frontend development and UI/UX of the platform that helps monitor
                and manage the system.
              </li>
            </ul>
          ),
        },
        // lbaw
        {
          shown: true,
          startDate: '2021-02-01',
          endDate: '2021-07-05',
          location: 'Porto, Porto, Portugal',
          title: 'TechCouncil - Collaborative Q&A Hub for all Tech Related issues',
          github: 'https://github.com/kiko-g/feup-lbaw',
          external: 'https://github.com/kiko-g/feup-lbaw#demo',
          linkedin: '',
          subtitle: 'PHP, Laravel, Javascript, HTML, Bootstrap5, CSS, PostgreSQL, Docker',
          externalSub: '',
          teamSize: 4,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Developed a web app for tech-related questions, utilizing planning, specifications,
                mockups, database design, and full-stack development.
              </li>
            </ul>
          ),
        },
        // ltw
        {
          shown: true,
          startDate: '2020-10-01',
          endDate: '2020-12-20',
          location: 'Porto, Porto, Portugal',
          title: 'Pet Nexus - Pet adoption web platform',
          github: 'https://github.com/kiko-g/feup-ltw',
          external: 'https://web.fe.up.pt/~up201704790/ltw/',
          linkedin: '',
          subtitle: 'HTML, CSS, JavaScript, PHP, SQLite',
          externalSub: '',
          teamSize: 3,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Developed a barebones pet adoption website from scratch, with the help of no
                frameworks.
              </li>
            </ul>
          ),
        },
        // iart
        {
          shown: true,
          startDate: '2020-05-01',
          endDate: '2020-06-30',
          location: 'Porto, Porto, Portugal',
          title: 'Football Matches Outcome Prediction',
          github: 'https://github.com/kiko-g/feup-iart/tree/master/Projects/P2',
          external: '',
          linkedin: '',
          subtitle:
            'Python, JupyterNotebook, Numpy, Pandas, SciKitLearn, Tensorflow, Matplotlib & Kaggle Datasets',
          externalSub: '',
          teamSize: 3,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Built a tool using Supervised Learning models on a dataset of 25k football matches
                to predict outcomes of other matchups. Compared ML algorithms like K-Nearest
                Neighbours, Decision Tree, Naive Bayes, and Neural Networks.
              </li>
            </ul>
          ),
        },
        // esof
        {
          shown: true,
          startDate: '2019-10-01',
          endDate: '2020-01-10',
          location: 'Porto, Porto, Portugal',
          title: 'OpenCX - Mobile App for Conferences',
          github: 'https://github.com/kiko-g/feup-esof/tree/master/campus_nav',
          external: 'https://github.com/open-cx/open-cx',
          linkedin: '',
          subtitle: 'Flutter, Dart, SQLite, Gherkin, Bluetooth',
          externalSub: '',
          teamSize: 3,
          description: (
            <ul className="list-inside list-disc">
              <li>
                Contributed to open source project: mobile app for campus navigation, enabling users
                to locate points of interest at conferences.
              </li>
            </ul>
          ),
        },
      ]}
    />
  )
}

function CvSkills() {
  const name = 'Skills'
  const tech = [
    { name: 'Git', time: '4' },
    { name: 'HTML/CSS', time: '3' },
    { name: 'JS/TS', time: '3' },
    { name: 'SQL', time: '3' },
    { name: 'PHP/Laravel', time: '2' },
    { name: 'ReactJS', time: '2' },
    { name: 'TailwindCSS', time: '2' },
    { name: 'NodeJS', time: '2' },
    { name: 'Next.js', time: '2' },
    { name: 'Gatsby.js', time: '2' },
    { name: 'Python', time: '3' },
    { name: 'Java', time: '2' },
    { name: 'C/C++', time: '3' },
    { name: 'Docker', time: '1.5' },
    { name: 'Flutter/Dart', time: '1' },
    { name: 'Haskell', time: '0.5' },
  ]

  const lang = [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Proficient | CAE C1 Level, 2016' },
    { name: 'Spanish', level: 'Decent understanding and speaking ability' },
    { name: 'French', level: 'Basic understanding' },
  ]

  return (
    <div className={classNames('flex flex-col gap-1 p-1')}>
      <header className="flex items-center gap-3">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-600 dark:text-blue-500">{name.substring(0, 3)}</span>
          <span>{name.substring(3)}</span>
        </h2>
        <div className="h-[1px] w-full bg-gray-300"></div>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-500">Technical</h2>
          <ul className="flex flex-col items-start justify-start gap-x-2 gap-y-0.5 text-sm font-normal lg:gap-x-3">
            {tech.map((skill, skillIdx) => (
              <li
                key={`cv-skill-tech-${skillIdx}`}
                className="flex items-center justify-center gap-1"
              >
                <strong>{skill.name}</strong>
                {skill.time !== '' && <span>{skill.time}y</span>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-500">Languages</h2>
          <ul className="flex flex-col items-start justify-start gap-x-3 gap-y-2 text-sm font-normal lg:gap-y-0.5">
            {lang.map((skill, skillIdx) => (
              <li
                key={`cv-skill-lang-${skillIdx}`}
                className="flex flex-col items-start justify-center gap-0 lg:flex-row lg:gap-1"
              >
                <strong>{skill.name}</strong>
                <span>{skill.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
