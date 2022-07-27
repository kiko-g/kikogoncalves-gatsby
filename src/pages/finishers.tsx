import React, { useEffect } from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'

const FinishersPage = () => {
  useEffect(() => {
    window.location.href = 'https://finishershub.netlify.app'
  }, [])

  return (
    <Layout location="Finishers" liquid>
      <Seo title="Finishers" />
    </Layout>
  )
}

export default FinishersPage
