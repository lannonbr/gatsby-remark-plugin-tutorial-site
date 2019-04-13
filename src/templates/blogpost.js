import React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
  )
}

export default BlogPostTemplate

export const PageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`
