import React from 'react'
import { Seo, ComingSoon, Layout } from '../layout'
import '../styles/pages/me.css'

const MePage = () => {
  return (
    <Layout location="Me">
      <Seo title="Me" />
      <ComingSoon />
    </Layout>
  )
}

export default MePage
