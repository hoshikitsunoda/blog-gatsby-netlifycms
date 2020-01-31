import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
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
          console.log(node.frontmatter)
          let featuredImgFluid =
            node.frontmatter.featuredImage.childImageSharp.fluid
          return (
            <article style={{ width: `50%` }} key={node.fields.slug}>
              <header>
                <LinkToPost style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <Thumbnail className="thumbnail" fluid={featuredImgFluid} />
                </LinkToPost>
              </header>
            </article>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
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
  display: block;

  img {
    width: 100%;
    display: block;
  }
`
