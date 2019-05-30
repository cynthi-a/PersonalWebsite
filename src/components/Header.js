import React, { Component } from 'react';
import '../styles/style.css';

import Nav from "../components/Nav";

class Header extends Component {

	render() {
		return(
    	  <div>
		    <header className="App-header">
		    
		      <div className="logo">
		      	&#123; <a href="/">Cynthia Lee</a> &#125;
		      </div>
		  	  
		  	  <Nav/>
		    </header>
		   </div>
	    
		)
	}
}

export default Header;
