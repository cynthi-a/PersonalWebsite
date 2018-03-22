import React, { Component } from 'react';
import PropTypes from "prop-types";

// Utilities
import kebabCase from "lodash/kebabcase";

// Components
import Helmet from "react-helmet";
import Link from "gatsby-link";

class Tags extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <div className="component-tags">
        <div className="component-tags-header">
          <h1>All Blog Tags</h1>
        </div>
      <ul>
      {this.props.tags.map(
        (tag, index) => (
            <li key={index}>
              <Link to={`/tags/${(tag.fieldValue)}/`}>
                # {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ) 
        )
      }
      </ul>
      </div>
    )
  }
}

export default Tags;