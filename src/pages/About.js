import '../styles/style.css';
import React, { Component } from 'react';
import Header from '../components/Header';

class About extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="component-About">
				<p>Hi, find out more about me <a href="https://en.wikipedia.org/wiki/Hui_people">here</a></p>
			</div>

			
		)
	}
}

export default About;