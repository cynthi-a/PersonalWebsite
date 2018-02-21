import React, { Component } from 'react';
import '../styles/style.css';
import bonnie from '../img/bichon-frise.svg';

class Header extends Component {

	constructor() {
		super();
	}

	render() {
		return(
	    <header className="App-header">
	      <h1 className="App-title">Welcome to my website!</h1>
	      <img className="bonnie" src={bonnie} alt="dog logo"/>

	    </header>
		)
	}
}

export default Header;