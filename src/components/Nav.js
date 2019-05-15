import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import Link from 'gatsby-link';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import TiTimes from 'react-icons/lib/ti/times';

class Nav extends Component {

  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={ <TiThMenu /> }
        menuCloseButton={ <TiTimes /> }
        changeMenuOn="500px"
        largeMenuClassName="large-menu"
        smallMenuClassName="small-menu"
        menu={
        
					<nav className="navigation-bar">
						<Link to="/" className="navigation-bar-link">Home</Link>
						<Link to="/About" className="navigation-bar-link">About</Link>
            <Link to="/CV" className="navigation-bar-link">CV</Link>
            <Link to="/Contact" className="navigation-bar-link">Contact</Link>
            <Link to="/Blog" className="navigation-bar-link">Blog</Link>
					</nav>
				
        }
      />
    );
  }
}

export default Nav;
