import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Group, GroupEntry } from '../'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { GithubIcon, LinkedinIcon } from '../../../icons'

const Projects = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: [{ frontmatter: { shown: DESC } }, { frontmatter: { startDate: DESC } }]
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
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
    render={(data) => (
      <Group name="Projects">
        {data.allMarkdownRemark.nodes
          .filter((node: { frontmatter: { shown: boolean } }) => node.frontmatter.shown === true)
          .map((node: { frontmatter: any; html: any }, entryIdx: number) => {
            const values = node.frontmatter
            const dates =
              values.startDate === values.endDate
                ? values.startDate
                : `${values.startDate} - ${values.endDate ?? 'Present'}`

            return (
              <GroupEntry key={`cv-projects-${entryIdx}`} date={dates} location={values.location}>
                <div className="flex items-start gap-1.5 lg:items-center">
                  <h3 className="text-base font-bold text-primary-900 dark:text-secondary-300 lg:text-lg">
                    {values.title}
                  </h3>

                  {values.external && (
                    <a
                      rel="noopener"
                      target="_blank"
                      href={values.external}
                      className="text-primary hover:opacity-75 dark:text-white"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                  {values.github && (
                    <a
                      rel="noopener"
                      target="_blank"
                      href={values.github}
                      className="text-primary hover:opacity-75 dark:text-white"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {values.linkedin && (
                    <a
                      rel="noopener"
                      target="_blank"
                      href={values.linkedin}
                      className="text-primary hover:opacity-75 dark:text-white"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="flex items-start gap-1.5 lg:items-center">
                  <h5 className="font-medium capitalize tracking-tight text-gray-500 dark:text-gray-400">
                    {values.subtitle}
                  </h5>

                  {values.externalSub && (
                    <a
                      rel="noopener"
                      target="_blank"
                      href={values.externalSub}
                      className="text-primary hover:opacity-75 dark:text-white"
                    >
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

export default Projects
