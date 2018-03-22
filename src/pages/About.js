import '../styles/style.css';
import React, { Component } from 'react';
import Header from '../components/Header';
import GoMortarBoard from 'react-icons/lib/go/mortar-board';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';
import Gallery from 'react-photo-gallery';


class About extends Component {

	constructor() {
		super();
	}

	render() {
		const PHOTO_SET = [
		  {
		    src: 'http://bonniebon.de/images/1.jpeg',
		    width: 4,
		    height: 3
		  },
		  {
		    src: 'http://bonniebon.de/images/2.jpeg',
		    width: 2,
		    height: 3
		  },
  		  {
		    src: 'http://bonniebon.de/images/3.jpeg',
		    width: 3,
		    height: 4
		  },
		  {
		    src: 'http://bonniebon.de/images/4.jpeg',
		    width: 3,
		    height: 4
		  }
		];
		return(
			<div className="page-About">
				<div className="quick-facts about-section-item">
					<h1>
						Quick Facts
					</h1>
					<div className="facts">

						<div className="fact">
							<h3 className="fact-attribute">
								Age
							</h3>
							<div className="fact-value">
								22
							</div>
						</div>

						<div className="fact">
							<h3 className="fact-attribute">
								Nationality
							</h3>
							<div className="fact-value">
								German
							</div>
						</div>

						<div className="fact">
							<h3 className="fact-attribute">
								Country of Residence
							</h3>
							<div className="fact-value">
								UK
							</div>
						</div>

						<div className="fact">
							<h3 className="fact-attribute">
								Favourite Pizza Topping
							</h3>
							<div className="fact-value">
								Pineapple
							</div>
						</div>

					</div>
				</div>

				<div className="staged-images">
					<h1>
						Pictures of my dog
					</h1>
					<p>To distract from how boring I am. Her name is <a href="http://bonniebon.de" target="_blank">Bonnie</a>.</p>
					<Gallery columns="2" photos={PHOTO_SET} />
				</div>

			</div>

		)
	}
}

export default About;