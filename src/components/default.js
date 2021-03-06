import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import Favicon from '../img/favicon.png'
import "prismjs/themes/prism-solarizedlight.css";

const TemplateWrapper = ({children}) => (
  <div className="template-wrapper">
    <Helmet>
      <title>Cynthia Lee | Software Developer</title>
      <meta name="description" content="Cynthia Lee is Software Developer at ThoughtWorks based in London.
      She holds a degree in business psychology but wanting to pursue a career in technology, she did obtained a 
      masters degree in software development." />
      <meta name="keywords" content="web developer, London, software developer, thoughtworks, cynthia, lee" />
      <meta name="author" content="Cynthia Lee" />
      <link rel="canonical" href="https://cynthialee.xyz" />
      <meta property="og:site_name" content="Cynthia" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cynthia Lee - Software Developer" />
      <meta property="og:url" content="http://cynthialee.xyz" />
      <meta name="google-site-verification" content="YOe1PPJrXiSLQ4NT6XHmbwxa1HR28LQmhqCOE3IvVE0" />
      <link rel="icon" href={Favicon} type="image/png" />
    </Helmet>
    
    <div className="header-wrapper">
      <Header/>
    </div>
    
    <div className="component-wrapper"
      style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
      }}
    >
      {children}
    </div>

    <div className="footer-wrapper">
      <Footer />
    </div>

  </div> 
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper;
