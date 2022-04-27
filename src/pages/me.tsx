import React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import '../styles/me.css'

const MePage = () => {
  return (
    <Layout location="Me" background={false}>
      <Seo title="Me" />
    </Layout>
  )
}

export default MePage
