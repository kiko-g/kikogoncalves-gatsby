import React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import './styles/cv.css'

const CvPage = () => (
  <Layout liquid location="CV">
    <Seo title="CV" />
    <div className="cv">
      <div className="core"></div>
      <div className="side">
        <img src={'images/hero/hero1.jpg'} className="aspect-square w-full rounded-lg shadow" alt="profile-picture" />
        <h2
          className="text-center text-lg font-normal tracking-wide 
        text-slate-700 dark:text-white md:my-2 xl:text-2xl"
        >
          <span>Francisco</span>
          <span>&nbsp;</span>
          <strong>Gonçalves</strong>
        </h2>
      </div>
    </div>
  </Layout>
)

export default CvPage
