import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>About this page</h1>
        <p>
          My name is Hosh'ki Tsunoda. I am a web developer / artist.
          <br /> This page displays things I like and I do. A lot of records and
          art.
        </p>
        <p>
          Feel free to contact me from <Link to={`/contact`}>Contact Page</Link>
        </p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
