import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import { Layout } from '../components/Layout'
import { Postcard } from '../components/Postcard'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout location="Blog">
      <Seo title="Blog" />
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 md:gap-8">
        {edges
          .filter((edge: { node: { frontmatter: { date: any } } }) => !!edge.node.frontmatter.date)
          .map((edge: { node: { id: React.Key } }) => (
            <Postcard key={edge.node.id} post={edge.node} />
          ))}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
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
