import React from 'react'
import { classNames } from '../utils'
import { useStaticQuery, graphql } from 'gatsby'
import { Navbar, Footer, Background } from '.'

type Props = {
  children: any
  location: string
  background?: boolean
  liquid?: boolean
}

const Layout = ({ children, location, background, liquid }: Props) => {
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
    <div className="layout">
      <Navbar location={location} siteTitle={data.site.siteMetadata?.title} />
      {background && <Background />}
      <div className={classNames('content', liquid ? 'max-w-8xl' : 'max-w-7xl')}>{children}</div>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
