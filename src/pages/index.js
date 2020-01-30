import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = ".es."
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title=".es." />
        {posts.map(({ node }) => {
          let featuredImgFluid =
            node.frontmatter.featuredImage.childImageSharp.fluid
          return (
            <Panel key={node.fields.slug}>
              <header>
                <LinkToPost style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <Thumbnail className="thumbnail" fluid={featuredImgFluid} />
                </LinkToPost>
              </header>
            </Panel>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            body
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const Panel = styled.article`
  width: 50%;
`
const LinkToPost = styled(Link)`
  width: 100%;
`

const Thumbnail = styled(Img)`
  height: 100%;

  img {
    width: 100%;
  }
`
