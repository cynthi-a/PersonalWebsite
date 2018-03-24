import React from "react";
import Helmet from "react-helmet";
import Tags from "../components/Tags";
import Link from "gatsby-link";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;// data.markdownRemark holds our post data

    return (
        <div className="blog-post-wrapper">
            <Helmet>
              <meta title={`Cynthia's Blog - ${frontmatter.title}`} />
            </Helmet>

            <div className="blog-post-post">

                <div className="blog-post-header" style={{ backgroundImage: `url(${frontmatter.featureimage})` }}>
                  <div className="blog-post-header-title">
                    <h1>{frontmatter.title}</h1>
                    <div className="blog-post-date">{frontmatter.date}</div>
                  </div>
                </div>

                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />

                <div className="blog-post-tags">
                  <h2>Tags</h2>
                  <ul>
                    
                    {frontmatter.tags.map(
                      (tag, index) => (
                          <li key={index}>
                            <Link to={`/tags/${(tag)}/`}>
                              # {tag}
                            </Link>
                          </li>
                        ) 
                      )
                    }
                  </ul>
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
        date(formatString: "Do MMMM, YYYY")
        path
        title
        featureimage
        tags
      }
    }
  }
`
;