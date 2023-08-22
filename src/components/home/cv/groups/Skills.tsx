import React from 'react'
import classNames from 'classnames'

export default function CvSkills() {
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
