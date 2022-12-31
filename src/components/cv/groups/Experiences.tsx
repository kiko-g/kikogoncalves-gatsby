import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Group, GroupEntry } from '../../../components/cv'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { GithubIcon, LinkedinIcon } from '../../icons'

const Experiences = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: [{ frontmatter: { shown: DESC } }, { frontmatter: { startDate: DESC } }]
          filter: { fileAbsolutePath: { regex: "/(experiences)/" } }
        ) {
          nodes {
            id
            html
            frontmatter {
              shown
              startDate(formatString: "MMM YYYY")
              endDate(formatString: "MMM YYYY")
              location
              github
              title
              linkedin
              external
              subtitle
              externalSub
            }
          }
        }
      }
    `}
    render={data => (
      <Group name="Experiences" decoration>
        {data.allMarkdownRemark.nodes
          .filter((node: { frontmatter: { shown: boolean } }) => node.frontmatter.shown === true)
          .map((node: { frontmatter: any; html: any }, entryIdx: number) => {
            const values = node.frontmatter
            const dates =
              values.startDate === values.endDate
                ? values.startDate
                : `${values.startDate} - ${values.endDate ?? 'Present'}`

            return (
              <GroupEntry key={`cv-experiences-${entryIdx}`} date={dates} location={values.location}>
                <div className="title">
                  <h3>{values.title}</h3>
                  {values.external && (
                    <a rel="noopener" target="_blank" href={values.external}>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                  {values.github && (
                    <a rel="noopener" target="_blank" href={values.github}>
                      <GithubIcon />
                    </a>
                  )}
                  {values.linkedin && (
                    <a rel="noopener" target="_blank" href={values.linkedin}>
                      <LinkedinIcon />
                    </a>
                  )}
                </div>

                <div className="subtitle">
                  <h5>{values.subtitle}</h5>
                  {values.externalSub && (
                    <a rel="noopener" target="_blank" href={values.externalSub}>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </GroupEntry>
            )
          })}
      </Group>
    )}
  />
)

export default Experiences
