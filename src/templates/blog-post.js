import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';
import { graphql } from 'gatsby';
import TemplateWrapper from "../components/default";

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds post data
  const { frontmatter, html } = markdownRemark;

  const shareBlockProps = {
    url: 'https://cynthialee.xyz' + frontmatter.path,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'Linkedin', icon: FaLinkedin },
      { network: 'Email', icon: FaEnvelope },
    ],
    text: 'Blog post: ' + frontmatter.title,
    longtext: `Check out this post '${frontmatter.title}' that I have just read.`,
  };

  return (
    <TemplateWrapper>
    <div className="blog-post-wrapper">
      <Helmet>
        <title>{frontmatter.title}</title>
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

        <ShareBlockStandard className="blog-post-share-blog" {...shareBlockProps} />

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
    </TemplateWrapper>
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
