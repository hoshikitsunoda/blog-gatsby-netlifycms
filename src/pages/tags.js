import React from "react"
import { Link, graphql } from "gatsby"

import { kebabCase } from "lodash"
import styled from "styled-components"

import Layout from "../components/layout"
const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group
  const siteTitle = ".es."
  const location = "/tags"

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h1>Tags</h1>
        <UList>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </UList>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
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
