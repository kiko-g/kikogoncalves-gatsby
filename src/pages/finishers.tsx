import React, { useEffect } from 'react'
import { Layout, Seo } from '../layout'

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
