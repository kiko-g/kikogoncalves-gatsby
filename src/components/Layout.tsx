import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from './Background'

type Props = {
  children: any
  location: string
  padding: boolean
}

export const Layout: React.FC<Props> = ({ children, padding, location }) => {
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
    <div className="layout">
      <Navbar location={location} siteTitle={title} />
      {padding ? (
        <div className="mx-auto mb-auto max-w-7xl p-4">{children}</div>
      ) : (
        <div className="mx-auto mb-auto">{children}</div>
      )}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
  padding: true,
}
