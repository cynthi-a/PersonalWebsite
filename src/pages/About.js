import '../styles/style.css';
import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import GoMortarBoard from 'react-icons/lib/go/mortar-board';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';


class About extends Component {

	constructor() {
		super();
	}

	render() {
		const PHOTO_SET_BONNIE = [
			'http://bonniebon.de/images/1.jpeg',
		  'http://bonniebon.de/images/2.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie7.jpeg',
		  'http://bonniebon.de/images/3.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie6.jpeg',
		  'http://bonniebon.de/images/4.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie5.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie2.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie3.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie1.png',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie4.jpeg',
		];

		const PHOTO_SET_KNITTING =[
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting1.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting2.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting3.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting7.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting4.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting5.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting6.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting8.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/origami1.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/origami2.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/origami3.jpeg',
		];
	const PHOTO_SET_WHISKY =[
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky1.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky2.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky6.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky8.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky3.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky15.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky9.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky10.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky11.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky12.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky13.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky14.jpeg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky16.jpeg',
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


				<h1>Pictures say more than words</h1>
				
				<p>Below are some picture galleries that are pretty good at giving an approximation of who I am.
					By <a href="#fact-3">Fact #3</a>, you will most likely
				  understand that I am actually an old person with old person hobbies trapped in a young body.
				</p>

				<div>
					<h2>
						Fact #1 - I love my dog
					</h2>
					<p>To distract from how boring I am. Her name is <a href="http://bonniebon.de" target="_blank">Bonnie</a>.</p>
					<Gallery images={PHOTO_SET_BONNIE} alt="a white bichon frise dog" />
				</div>

				<div>

					<h2>
						Fact #2 - I love whisky
					</h2>

						<Gallery images={PHOTO_SET_WHISKY} alt="scotch whisky"/>

				</div>

				<div id="fact-3">
					<h2>
						Fact #3 - I love anything handiwork-related
					</h2>
					<p>
						If you're a fellow granny, you can also check my Ravelry projects<span> </span>
						<a href="https://www.ravelry.com/projects/Cynthia95" target="_blank">
							here
						</a>.
					</p>
					<Gallery images={PHOTO_SET_KNITTING} alt="handiwork"/>
				</div>


			</div>
		)
	}
}

export default About;