import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ProjectCard } from '../components/ProjectCard'
import '../styles/pages/portfolio.css'

// prettier-ignore
const PortfolioPage = ({ data: { allMarkdownRemark: { edges }, }, }) => (
  <Layout location="Portfolio">
    <Seo title="Portfolio" />
    <main className="portfolio">
      <header>
        <h2>Portfolio</h2>
        <p>Portfolio description</p>
      </header>

      <article>
        {edges
          .filter((edge: { node: { frontmatter: { date: any } } }) => !!edge.node.frontmatter.date)
          .map((edge: { node: { id: React.Key } }) => (
            <ProjectCard key={edge.node.id} post={edge.node} />
          ))}
      </article>
    </main>
  </Layout>
)

export default PortfolioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: [DESC, DESC], fields: [frontmatter___pinned, frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 85)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
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
  }
`
