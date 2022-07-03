import React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ComingSoon } from '../layout/ComingSoon'
import './styles/cv.css'

const CvPage = () => (
  <Layout location="CV">
    <Seo title="CV" />
    <ComingSoon />
  </Layout>
)

export default CvPage
