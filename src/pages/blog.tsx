import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../components/Layout'
import { Postcard } from '../components/Postcard'

// prettier-ignore
const BlogPage = ({ data: { allMarkdownRemark: { edges }, }, }) => {
  const title = 'Blog'
  const description = "I've written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to create maintain, but the truth is you're never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you'll wonder how you ever worked with CSS any other way."

  return (
    <Layout location="Blog">
      <Seo title="Blog" />
      <div className="container flex-1 flex-col justify-between space-y-6 px-4 py-6">
        <header>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg font-normal">{description}</p>
        </header>
        <div className="grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {edges
            .filter((edge: { node: { frontmatter: { date: any } } }) => !!edge.node.frontmatter.date)
            .map((edge: { node: { id: React.Key } }) => (
              <Postcard key={edge.node.id} post={edge.node} />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: [DESC, DESC], fields: [frontmatter___pinned, frontmatter___date] }) {
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
        }
      }
    }
  }
`
