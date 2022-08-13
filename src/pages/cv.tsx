import React from 'react'
import { Layout, Seo } from '../layout'
import { Core, Sidebar } from '../components/cv'
import '../styles/pages/cv.css'

const CvPage = () => {
  return (
    <Layout liquid location="CV">
      <Seo title="CV" />
      <div className="cv">
        <Sidebar />
        <Core />
      </div>
    </Layout>
  )
}

export default CvPage
