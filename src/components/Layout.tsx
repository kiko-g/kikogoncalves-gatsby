import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from './Background'

type Props = {
  children: any
  location: string
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
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
    <div className="layout">
      <Navbar location={location} siteTitle={title} />
      <div className={classNames('mx-auto my-auto max-w-screen')}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}
