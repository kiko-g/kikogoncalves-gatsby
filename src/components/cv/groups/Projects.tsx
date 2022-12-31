import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Group, GroupEntry } from '../../../components/cv'
import { ExternalLinkIcon } from '@heroicons/react/outline'
import { GithubIcon, LinkedinIcon } from '../../icons'

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: [DESC, DESC], fields: [frontmatter___shown, frontmatter___startDate] }
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
          edges {
            node {
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
      }
    `}
    render={data => (
      <Group name="Projects" decoration>
        {data.allMarkdownRemark.edges
          .filter((item: { node: { frontmatter: { shown: boolean } } }) => item.node.frontmatter.shown === true)
          .map((entry: { node: { frontmatter: any; html: any } }, entryIdx: number) => {
            const values = entry.node.frontmatter
            const dates =
              values.startDate === values.endDate
                ? values.startDate
                : `${values.startDate} - ${values.endDate ?? 'Present'}`

            return (
              <GroupEntry key={`cv-projects-${entryIdx}`} date={dates} location={values.location}>
                <div className="title">
                  <h3>{values.title}</h3>
                  {values.external && (
                    <a rel="noopener" target="_blank" href={values.external}>
                      <ExternalLinkIcon className="h-5 w-5" />
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
                      <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div dangerouslySetInnerHTML={{ __html: entry.node.html }} />
              </GroupEntry>
            )
          })}
      </Group>
    )}
  />
)

export default Projects
