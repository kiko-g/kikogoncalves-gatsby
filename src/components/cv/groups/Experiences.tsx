import React from 'react'
import { GithubIcon, LinkedinIcon } from '../../icons'
import { Group, GroupEntry } from '../../../components/cv'
import { ExternalLinkIcon } from '@heroicons/react/outline'

const Experiences = () => {
  return (
    <Group name="Experiences">
      {/* NIAEFEUP */}
      <GroupEntry date="Sep 2018 - Jan 2022" location="Porto, Portugal">
        <div className="title">
          <h3>Active Member</h3>
        </div>

        <div className="subtitle">
          <h5>NIAEFEUP - Informatics Engineering Student Branch @ FEUP</h5>
          <a
            rel="noopener"
            target="_blank"
            href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31224&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2021"
          >
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
          <a rel="noopener" target="_blank" href="https://github.com/NIAEFEUP">
            <GithubIcon />
          </a>
          <a rel="noopener" target="_blank" href="https://www.linkedin.com/company/nifeup/mycompany">
            <LinkedinIcon />
          </a>
        </div>

        <ul className="bullets">
          <li>Contributed to and co-organized a variety of projects/events</li>
        </ul>
      </GroupEntry>

      {/* Erasmus */}
      <GroupEntry date="Sep 2018 - Jan 2022" location="Porto, Portugal">
        <div className="title">
          <h3>Erasmus Student</h3>
        </div>

        <div className="subtitle">
          <h5>Aalto University School of Science</h5>
          <a rel="noopener" target="_blank" href="https://www.aalto.fi/en/school-of-science">
            <ExternalLinkIcon className="h-5 w-5" />
          </a>
          <a rel="noopener" target="_blank" href="https://www.linkedin.com/school/aalto-university">
            <LinkedinIcon />
          </a>
        </div>

        <ul className="bullets">
          <li>
            Studied computer science abroad at Aalto University, in Espoo, Finland as an exchange student part of the
            Erasmus program
          </li>
        </ul>
      </GroupEntry>

      {/* Other */}
      <GroupEntry date="Sep 2018 - Jan 2022" location="Porto, Portugal">
        <div className="title">
          <h3>Participant</h3>
        </div>

        <div className="subtitle">
          <h5>Other experiences</h5>
        </div>

        <ul className="bullets">
          <li>5 Camiños de Santiago</li>
          <li>Interrail across Europe</li>
          <li>Volunteering focused on visiting and helping elderly people</li>
        </ul>
      </GroupEntry>
    </Group>
  )
}

export default Experiences
