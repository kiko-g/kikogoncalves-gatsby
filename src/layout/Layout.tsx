import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from './Background'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  children: any
  location: string
  background?: boolean
  home?: boolean
}

export const Layout = ({ children, location, background, home }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return home ? (
    <div className="layout">
      <Navbar location={location} siteTitle={data.site.siteMetadata?.title} />
      {background ? <Background /> : null}
      <div className="content-home">{children}</div>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  ) : (
    <div className="layout">
      <Navbar location={location} siteTitle={data.site.siteMetadata?.title} />
      {background ? <Background /> : null}
      <div className="content">{children}</div>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
  background: false,
  home: false,
}
