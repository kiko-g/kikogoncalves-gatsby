import * as React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from './Background'
import { DarkModeSwitchSublime } from './DarkModeSwitchSublime'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  children: any
  location: string
  homepage?: boolean
}

export const Layout: React.FC<Props> = ({ children, location, homepage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {homepage ? (
        <div className="home">
          <Background />
          <div className="absolute top-4 right-4">
            <DarkModeSwitchSublime />
          </div>
          {children}
        </div>
      ) : (
        <div className="layout">
          <Navbar location={location} siteTitle={data.site.siteMetadata?.title} />
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
