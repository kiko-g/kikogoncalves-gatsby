import React from 'react'
import { Group } from '../../../components/cv'

const Skills = () => {
  const tech = [
    { name: 'Git', time: '4' },
    { name: 'HTML/CSS', time: '3' },
    { name: 'JS/TS', time: '3' },
    { name: 'SQL', time: '3' },
    { name: 'PHP/Laravel', time: '2' },
    { name: 'ReactJS', time: '2' },
    { name: 'TailwindCSS', time: '2' },
    { name: 'NodeJS', time: '2' },
    { name: 'GatsbyJS', time: '1.5' },
    { name: 'Python', time: '3' },
    { name: 'Java', time: '2' },
    { name: 'C/C++', time: '3' },
    { name: 'Docker', time: '1.5' },
    { name: 'Flutter/Dart', time: '1' },
    { name: 'Haskell', time: '0.5' },
    { name: 'Prolog', time: '0.5' },
    { name: 'Kotlin', time: '0.5' },
    { name: 'REST API, OOP, Agile/Scrum, Linux', time: '' },
  ]

  const lang = [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Proficient | CAE C1 Level, 2016' },
    { name: 'Spanish', level: 'Decent understanding' },
    { name: 'French', level: 'Basic understanding' },
  ]

  return (
    <Group name="Skills">
      <div className="text-base">
        <h2 className="font-semibold dark:text-tertiary">Technical</h2>
        <div className="mt-1 flex flex-wrap items-center justify-start gap-x-2 gap-y-0.5 text-sm font-normal lg:gap-x-3">
          {tech.map((skill, skillIdx) => (
            <div key={`cv-skill-tech-${skillIdx}`} className="flex items-center justify-center gap-1">
              <strong>{skill.name}</strong>
              {skill.time !== '' && <span>{skill.time}y</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="text-base">
        <h2 className="font-semibold dark:text-tertiary">Languages</h2>
        <div className="mt-1 flex flex-wrap items-center justify-start gap-x-3 gap-y-0.5 text-sm font-normal">
          {lang.map((skill, skillIdx) => (
            <div key={`cv-skill-lang-${skillIdx}`} className="flex items-center justify-center gap-1">
              <strong>{skill.name}</strong>
              <span>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </Group>
  )
}

export default Skills
