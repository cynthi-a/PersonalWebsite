import React, { Component } from 'react';
import '../styles/style.css';
import bonnie from '../img/bichon-frise.svg';
import Nav from "../components/Nav";

class Header extends Component {

	constructor() {
		super();
	}

	render() {
		return(
    	  <div>
		    <header className="App-header">
		    
		      <div className="logo">
		      	[ˈpɛblɒg]
		      </div>
		  	  
		  	  <Nav/>
		    </header>
		   </div>
	    
		)
	}
}

export default Header;