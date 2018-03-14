import React, { Component } from 'react';
import Link from "gatsby-link";
import Tags from "../components/Tags";

export default function TagsPage({data}) {
  const {group: tags} = data.allMarkdownRemark;
  return(
    <Tags tags={tags}/>
  )
}


export const pageQuery = graphql`
query TagsPageQuery {
  allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`;