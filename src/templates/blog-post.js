import React from "react";
import Helmet from "react-helmet";
import Tags from "../components/Tags";

export default function Template({
      data, // this prop will be injected by the GraphQL query we'll write in a bit
    }) {
    const { markdownRemark: post } = data; // data.markdownRemark holds our post data
    return (
        <div className="blog-post-wrapper">
            <Helmet>
              <meta title={`Cynthia's Blog - ${post.frontmatter.title}`} />
            </Helmet>

            <div className="blog-post-post">

                <div className="blog-post-header" style={{ backgroundImage: `url(${post.frontmatter.featureimage})` }}>
                  <div className="blog-post-header-title">
                    <h1>{post.frontmatter.title}</h1>
                  </div>
                </div>

                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />

                <div className="blog-post-tags">

                  <Tags tags={post.frontmatter.tags}/>
                </div>

            </div>
        </div>
    );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featureimage
        tags
      }
    }
  }
`
;