import * as React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { DarkModeSwitchSublime } from './DarkModeSwitchSublime'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  children: any
  location: string
  homepage?: boolean
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const Layout: React.FC<Props> = ({ children, location, homepage }) => {
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
    <>
      {homepage ? (
        <div className="home">
          <div className="background" />
          <div className="absolute top-4 right-4">
            <DarkModeSwitchSublime />
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div className="layout">
          <Navbar location={location} siteTitle={title} />
          <div className="mx-auto my-auto max-w-screen">{children}</div>
          <Footer />
        </div>
      )}
    </>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
  homepage: false,
}
