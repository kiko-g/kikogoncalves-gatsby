import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo } from '../components/layout'
import { PortfolioEntry } from '../components/porfolio'
import '../styles/pages/portfolio.css'

const PortfolioPage = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Layout location="Portfolio">
      <Seo title="Portfolio" />
      <main className="portfolio">
        <header>
          <h2>Portfolio</h2>
          <p>
            Welcome to the portfolio! This is where you can browse through the main (software)
            projects I've contributed to or developed myself. The source code for most of these
            projects is available on{' '}
            <a target="_blank" className="link" href="https://github.com/kiko-g?tab=repositories">
              my github
            </a>
            , so make sure you check that out and maybe drop a follow! 😊
          </p>
        </header>

        <article>
          {nodes
            .filter((node: { frontmatter: { startDate: any } }) => !!node.frontmatter.startDate)
            .map((node: { id: React.Key }) => (
              <PortfolioEntry key={`project-${node.id}`} project={node} />
            ))}
        </article>
      </main>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: [{ frontmatter: { pinned: DESC } }, { frontmatter: { startDate: DESC } }]
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      nodes {
        id
        html
        frontmatter {
          pinned
          title
          slug
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          repo
          deploy
          preview
          techStack
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          featuredVideo
          description
          team
        }
      }
    }
  }
`
