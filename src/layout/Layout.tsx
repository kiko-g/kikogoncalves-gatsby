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
    <div
      className="flex min-h-screen flex-col overflow-clip bg-ice font-prose font-medium 
    text-gray-800 opacity-[99%] dark:bg-navy dark:text-white"
    >
      <Navbar location={location} siteTitle={data.site.siteMetadata?.title} />
      {background && <Background />}
      <div
        className={classNames(
          liquid ? 'max-w-8xl' : 'max-w-7xl',
          'container z-10 mx-auto my-auto px-0 py-2 lg:px-4 lg:py-4'
        )}
      >
        {children}
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}

export default Layout
