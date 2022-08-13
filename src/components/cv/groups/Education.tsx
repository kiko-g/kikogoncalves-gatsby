import React from 'react'
import { Group, GroupEntry } from '../../../components/cv'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const Education = () => {
  return (
    <Group name="Education">
      {/* Bachelor Degree */}
      <GroupEntry date="Sep 2018 - Jan 2022" location="Porto, Portugal">
        <div className="title">
          <h3>Faculty of Engineering of the University of Porto (FEUP)</h3>
          <a rel="noopener" target="_blank" href="fe.up.pt">
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="subtitle">
          <h5>Bachelor in Informatics and Computer Engineering</h5>
          <a
            rel="noopener"
            target="_blank"
            href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31224&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2021"
          >
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
        </div>

        <ul className="bullets">
          <li>Completed degree with cumulative GPA 15/20</li>
          <li>
            Relevant coursework Web App Development, Algorithms and Data Structures, Databases, Artificial Intelligence
          </li>
        </ul>
      </GroupEntry>

      {/* Master Degree */}
      <GroupEntry date="Sep 2021 - Present" location="Porto, Portugal">
        <div className="title">
          <h3>Faculty of Engineering of the University of Porto (FEUP)</h3>
          <a rel="noopener" target="_blank" href="fe.up.pt">
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="subtitle">
          <h5>Master in Informatics and Computer Engineering</h5>
          <a
            rel="noopener"
            target="_blank"
            href="https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_PLANOS_ESTUDOS_VIEW?pv_plano_id=31204&pv_ano_lectivo=2022"
          >
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
        </div>

        <ul className="bullets">
          <li>Currently enrolled in year 2 out of 2 with cumulative GPA of 17.55/20</li>
          <li>
            Relevant coursework Full Stack Development, IOT for factory management, P2P Timeline, Semantic Web App
            Development
          </li>
        </ul>
      </GroupEntry>
    </Group>
  )
}

export default Education
