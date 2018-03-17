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
		      	[ˈpɛblɒg] 2018 | Design and Development by Cynthia Lee
		      </span>
		  	  
		    </footer>
		   </div>
	    
		)
	}
}

export default Footer;