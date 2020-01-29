import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import styled from "styled-components"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    const siteTitle = ".es."
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title=".es." />
        {posts.map(({ node }) => {
          let featuredImgFluid =
            node.frontmatter.featuredImage.childImageSharp.fluid
          console.log(node)
          return (
            <Panel key={node.fields.slug}>
              <header>
                {/* <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3> */}
                <LinkToPost style={{ boxShadow: `none` }} to={node.fields.slug}>
                  <Thumbnail className="thumbnail" fluid={featuredImgFluid} />
                </LinkToPost>
                {/* <small>{node.frontmatter.date}</small> */}
              </header>
              {/*<section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>*/}
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
  background-image: url(${props => props.fluid});
  height: 100%;
`
