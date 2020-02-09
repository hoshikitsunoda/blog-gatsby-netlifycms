import React from "react"
import { Link, graphql } from "gatsby"

const TagsPage = ({ data }) => {
  const allTags = data.allMarkdownRemark.group

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {allTags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
