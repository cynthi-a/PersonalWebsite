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
				<div className="quick-facts">
					<h2>
						Quick Facts
					</h2>

				</div>


				<div className="welcoming-paragraph">
					<p>Hi, find out more about me <a href="https://en.wikipedia.org/wiki/Hui_people">here</a></p>
				</div>

				<div className="staged-images">
					<h2>
						A collection of unreasonably staged images of me in unnatural environments
					</h2>
				</div>

				<div className="navigation">
					<h2></h2>
				</div>

				<div className="aboutWebsite">
					<h2>Information On The Website</h2>
					Here is some information for those who are interested about how I built this site.
				</div>
			</div>

			
		)
	}
}

export default About;