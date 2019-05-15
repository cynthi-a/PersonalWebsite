import React, { Component } from 'react';

import Link from "gatsby-link";

class Tags extends Component {

  render() {
    return (
      <div className="component-tags">
        <div className="component-tags-header">
          <h1>Tags</h1>
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