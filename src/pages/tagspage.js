import React from 'react';
import Tags from "../components/Tags";
import { graphql } from 'gatsby';
import TemplateWrapper from '../components/default';

export default function TagsPage({ data }) {
  const { group: tags } = data.allMarkdownRemark;
  return (
    <TemplateWrapper>
      <Tags tags={tags} />
    </TemplateWrapper>
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