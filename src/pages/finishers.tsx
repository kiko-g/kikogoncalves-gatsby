import React, { useEffect } from 'react'
import { Layout, Seo } from '../components/layout'

export default function FinishersPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://finishershub.vercel.app'
    }
  }, [])

  return <></>
}
