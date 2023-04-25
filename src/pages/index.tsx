import React from 'react'
import { Layout, Seo } from '../components/layout'
import { About, Skills } from '../components/home'
import Cv from '../components/cv/Cv'
import SeeMore from '../components/SeeMore'

const IndexPage = () => {
  return (
    <Layout location="Home" liquid>
      <Seo title="Home" />
      <main className="container mx-auto mb-8 flex-1 flex-col justify-between space-y-6 px-4 md:px-0">
        <header className="mt-2 flex items-start justify-between">
          <div className="mt-0">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Francisco Gonçalves
            </h2>
            <p className="mt-2 text-lg font-normal">
              Welcome to my website. Take a look around to find more about me. Hope you enjoy your
              stay! 😄
            </p>
          </div>
        </header>

        <section className="space-y-8">
          <About />
          <Skills />
          <Cv />
        </section>

        <SeeMore />
      </main>
    </Layout>
  )
}

export default IndexPage
