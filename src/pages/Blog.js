import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Tags from "../components/Tags";

export default function Blog({data}) {
    const {edges: posts} = data.posts;
    const {group: tags} = data.tags;
    return (
        <div className="blog-posts-wrapper">
          <div className="blog-post">
            {posts
                .filter(post => post.node.frontmatter.title.length > 0)
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
                            <p>Tags: {post.frontmatter.tags}</p>
                        </div>
                    );
                })}
          </div>
          <div className="blog-posts-tags">
            <Tags tags={tags}/>
          </div>
        </div>
    );
}

export const pageQuery = graphql`
query BlogQuery {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
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
