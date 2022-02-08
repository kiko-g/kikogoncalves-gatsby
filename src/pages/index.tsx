import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout location="Home">
    <Seo title="Home" />
    <ul className="bg-blue-100 border-2 border-blue-300/50 text-slate-700 p-2 space-y-2">
      <li className="even:bg-slate-100 odd:bg-white">
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li className="even:bg-slate-100 odd:bg-white">
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </li>
      <li className="even:bg-slate-100 odd:bg-white">
        <Link to="/using-ssr">Go to "Using SSR"</Link>
      </li>
      <li className="even:bg-slate-100 odd:bg-white">
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
