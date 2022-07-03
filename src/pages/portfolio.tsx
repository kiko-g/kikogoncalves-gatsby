import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { PortfolioEntry } from '../components/porfolio'
import '../styles/portfolio.css'

// prettier-ignore
const PortfolioPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  return (
    <Layout location="Portfolio">
      <Seo title="Portfolio" />
      <main className="portfolio">
        <header>
          <h2>Portfolio</h2>
          <p>
            Welcome to the portfolio! This is where you can browse through the main (software) projects I've contributed
            to or developed myself. The source code for most of these projects is available on{' '}
            <a
              target="_blank"
              className="link"
              href="https://github.com/kiko-g?tab=repositories"
            >
              my github
            </a>, so make sure you check
            that out and maybe drop a follow! 😊
          </p>
        </header>

        <article>
          {edges
            .filter((edge: { node: { frontmatter: { startDate: any } } }) => !!edge.node.frontmatter.startDate)
            .map((edge: { node: { id: React.Key } }) => (
              <PortfolioEntry key={`project-${edge.node.id}`} project={edge.node} />
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
      sort: { order: [DESC, DESC], fields: [frontmatter___pinned, frontmatter___startDate] }
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            pinned
            title
            slug
            startDate(formatString: "MMM DD, YYYY")
            endDate(formatString: "MMM DD YYYY")
            repo
            deploy
            techStack
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
              }
            }
            description
          }
        }
      }
    }
  }
`
