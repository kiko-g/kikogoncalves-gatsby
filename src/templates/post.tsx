import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import Seo from '../components/Seo'

const Post = () => {
  const postName = 'Post name'

  return (
    <Layout location={postName}>
      <Seo title={postName} />
    </Layout>
  )
  
}
export default Post
