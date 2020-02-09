import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const siteTitle = ".es."
  const location = "/tags"
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout location={`${location}/${tag}`} title={siteTitle}>
      <div>
        <h1>{tagHeader}</h1>
        <UList>
          {edges.map(({ node }) => {
            const { title, date } = node.frontmatter
            const { slug } = node.fields
            return (
              <li key={slug}>
                <Link to={slug}>
                  {title} ({date})
                </Link>
              </li>
            )
          })}
        </UList>
        <Link to="/tags">All tags</Link>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

const UList = styled.ul`
  list-style: none;

  li {
    a {
      font-size: 1.3rem;
    }
  }
`
