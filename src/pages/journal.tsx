import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '../components/layout'
import { JournalPageCard } from '../components/journal'

const JournalPage = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Layout location="Journal" liquid>
      <Seo title="Journal" />
      <main className="container mx-auto flex-1 flex-col justify-between space-y-6 px-4 py-4 xl:px-4 2xl:px-0">
        <header className="mt-2">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Journal</h2>
          <p className="mt-4 text-lg font-normal">
            Welcome to my journal! This is where you'll find posts about things I want to talk
            about. Most posts will be about software development, engineering and programming, but
            occasionally you might find some stuff related to hobbies of mine and maybe some other
            random jibber-jabber!
          </p>
        </header>

        <article className="grid grid-flow-row grid-cols-1 gap-x-5 gap-y-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {nodes
            .filter(
              (node: { frontmatter: { date: any; shown: boolean } }) =>
                !!node.frontmatter.date && node.frontmatter.shown
            )
            .map((node: { id: React.Key }) => (
              <JournalPageCard key={`journalpage-${node.id}`} post={node} />
            ))}
        </article>
      </main>
    </Layout>
  )
}

export default JournalPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { pinned: DESC } }, { frontmatter: { date: ASC } }]
      filter: { fileAbsolutePath: { regex: "/(journal)/" } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 80)
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          slug
          title
          shown
          pinned
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`
