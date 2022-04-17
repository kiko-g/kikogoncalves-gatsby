import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { Postcard } from '../components/Postcard'
import '../styles/pages/blog.css'

// prettier-ignore
const BlogPage = ({ data: { allMarkdownRemark: { edges }, }, }) => {
  return (
    <Layout location="Blog">
      <Seo title="Blog" />
      <main className='blog'>
        <header>
          <h2>Blog</h2>
          <p>Blog description</p>
        </header>

        <article>
          {edges
            .filter((edge: { node: { frontmatter: { date: any } } }) => !!edge.node.frontmatter.date)
            .map((edge: { node: { id: React.Key } }) => (
              <Postcard key={edge.node.id} post={edge.node} />
            ))}
        </article>
      </main>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: [DESC, DESC], fields: [frontmatter___pinned, frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
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
