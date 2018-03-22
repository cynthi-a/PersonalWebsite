import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Favicon from '../img/favicon.png'

import "prismjs/themes/prism-solarizedlight.css";

const TemplateWrapper = ({children}) => (
  <div className="template-wrapper">
    <Helmet>
      <title>Cynthia Lee | Web Developer</title>
      <meta name="description" content="Cynthia Lee is an IT professional based in Manchester who does full-stack web development" />
      <meta name="keywords" content="fullstack, web developer, Manchester, cynthia, lee" />
      <meta name="author" content="Cynthia Lee" />
      <link rel="canonical" href="http://cynthialee.xyz" />
      <meta property="og:site_name" content="Cynthia" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cynthia Lee - Software Developer" />
      <meta property="og:url" content="http://cynthialee.xyz" />
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
      {children()}
    </div>

    <div className="footer-wrapper">
      <Footer />
    </div>

  </div> 
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
