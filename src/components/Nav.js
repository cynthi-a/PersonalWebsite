import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { Route, Link } from 'react-router-dom'
import TiThMenu from 'react-icons/lib/ti/th-menu';
import TiTimes from 'react-icons/lib/ti/times';

class Nav extends Component {

	constructor() {
		super();
	}

  render() {
    return (
    	<div className="navigation-wrapper">
      <ResponsiveMenu
        menuOpenButton={<TiThMenu />}
        menuCloseButton={<TiTimes />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
        
					<nav className="navigation-bar">
						<Link to="/" className="navigation-bar-link">Home</Link>
						<Link to="/blog" className="navigation-bar-link">Blog</Link>
						<div className="navigation-bar-right-column">
							<Link to="/about" className="navigation-bar-link">About</Link>
						</div>
					</nav>
				
        }
      />
      </div>
    );
  }




}

export default Nav;
