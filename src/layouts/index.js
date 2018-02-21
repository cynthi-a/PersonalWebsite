import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import Nav from "../components/Nav";

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet
            title="Pebble in a shoe"
            meta={[
                {name: 'description', content: 'Super great personal page'},
                {name: 'keywords', content: 'blog, tiny'},
            ]}
        />
        <Header/>
        <Nav/>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
            }}
        >
            {children()}
        </div>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
