import React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ComingSoon } from '../layout/ComingSoon'
import './styles/me.css'

const MePage = () => {
  return (
    <Layout location="Me">
      <Seo title="Me" />
      <ComingSoon />
    </Layout>
  )
}

export default MePage
