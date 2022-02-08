import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"

type Props = {
  children: any
  location: string
}

export const Layout: React.FC<Props> = ({ children, location }) => {
  /**
   * Layout component that queries for data * with Gatsby's useStaticQuery component
   * See: https://www.gatsbyjs.com/docs/use-static-query/
   */
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata?.title

  return (
    <div className="homepage">
      <Navbar location={location} siteTitle={title} />
      <div className="min-h-adjusted mx-auto p-6">{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  location: "Page Name",
}
