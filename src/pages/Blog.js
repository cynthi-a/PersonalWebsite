import React from "react";
import Link from "gatsby-link";
import Tags from "../components/Tags";
import { graphql } from 'gatsby';
import TemplateWrapper from '../components/default';

export default function Blog({data}) {
    const {edges: posts} = data.posts;
    const {group: tags} = data.tags;
    return (
      <TemplateWrapper>
        <div className="blog-posts-wrapper">
          <div className="blog-post">
            {posts
                .map(({node: post}) => {
                    return (
                        <div className="blog-post-preview" key={post.id}>
                            <div className="blog-post-preview-title">
                                <h1>
                                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                                </h1>
                                <span>{post.frontmatter.date}</span>
                            </div>
                            <p>{post.excerpt}</p>
                            <p>Tags: {post.frontmatter.tags.join(', ')}</p>
                        </div>
                    );
                })}
          </div>
          <div className="blog-posts-tags">
            <Tags tags={tags}/>
          </div>
        </div>
        </TemplateWrapper>
    );
}

export const pageQuery = graphql`
query BlogQuery {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            path
            tags
            featureimage
          }
        }
      }
    }
  tags: allMarkdownRemark(limit: 2000) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
`;
