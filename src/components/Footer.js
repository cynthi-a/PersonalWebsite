import React, { Component } from 'react';
import '../styles/style.css';

import Nav from "../components/Nav";

class Footer extends Component {

	constructor() {
		super();
	}

	render() {
		return(
    	  <div className="component-Footer">
		    <footer>
		    
		      <span className="footer-content">
	      		&#169; Cynthia Lee 2018
		      </span>
		  	  
		    </footer>
		   </div>
	    
		)
	}
}

export default Footer;