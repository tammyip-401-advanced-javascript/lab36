import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello~</h1>
    <p>Welcome to Tammy's first Gatsby site.</p>
    <p>Please see my porfolio here.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    <Link to="/using-typescript/">Go to "Project Page"</Link>
  </Layout>
)

export default IndexPage
