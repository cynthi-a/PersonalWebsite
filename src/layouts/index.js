import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.css'
import Favicon from '../img/favicon.png'

const TemplateWrapper = ({children}) => (
  <div className="template-wrapper">
    <Helmet>
      <title>Cynthia Lee | Web Developer</title>
      <meta name="description" content="Super great personal page" />
      <meta name="keywords" content="Software Engineer and IT professional in Manchester" />
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
