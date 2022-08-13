import React from 'react'
import { GithubIcon } from '../../icons'
import { Group, GroupEntry } from '../../../components/cv'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const Projects = () => {
  return (
    <Group name="Projects">
      {/*  */}
      <GroupEntry date="Sep 2018 - Jan 2022" location="Porto, Portugal">
        <div className="title">
          <h3>TTS - Time Table Selector</h3>
          <a rel="noopener" target="_blank" href="https://ni.fe.up.pt/tts">
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
          <a rel="noopener" target="_blank" href="https://github.com/NIAEFEUP/tts-revamp-fe">
            <GithubIcon />
          </a>
        </div>

        <div className="subtitle">
          <h5>React, Typescript, TailwindCSS, Docker</h5>
        </div>

        <ul className="bullets">
          <li>Developed platform for University of Porto students to build their schedules.</li>
        </ul>
      </GroupEntry>
    </Group>
  )
}

export default Projects
