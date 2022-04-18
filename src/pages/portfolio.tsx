import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ProjectCard } from '../components/ProjectCard'
import './styles/portfolio.css'

// prettier-ignore
const PortfolioPage = ({ data: { allMarkdownRemark: { edges }, }, }) => {
  return (
    <Layout location="Portfolio">
      <Seo title="Portfolio" />
      <main className="portfolio">
        <header>
          <h2>Portfolio</h2>
          <p>
            In this page you can see my main software projects that I've developed or contributed to in the past, or
            that I'm currently developing. The source code of the majority of these products is available on my GitHub,
            so make sure you check that out and maybe drop a follow 👌
          </p>
        </header>

        <article>
          {edges
            .filter((edge: { node: { frontmatter: { startDate: any } } }) => !!edge.node.frontmatter.startDate)
            .map((edge: { node: { id: React.Key } }) => (
              <ProjectCard key={edge.node.id} project={edge.node} />
            ))}
        </article>
      </main>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }) {
      edges {
        node {
          html
          frontmatter {
            pinned
            title
            slug
            startDate(formatString: "MMMM DD, YYYY")
            endDate(formatString: "MMMM DD, YYYY")
            repo
            deploy
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
