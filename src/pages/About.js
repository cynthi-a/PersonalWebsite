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
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie7.JPG',
		  'http://bonniebon.de/images/3.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie6.JPG',
		  'http://bonniebon.de/images/4.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie5.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie2.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie3.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie1.PNG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie4.JPG',
		];

		const PHOTO_SET_KNITTING =[
  		'https://images4-e.ravelrycache.com/uploads/Cynthia95/487758565/file_medium2.jpg',
		  'https://images4-e.ravelrycache.com/uploads/Cynthia95/468232715/file_medium2.jpg',
		  'https://images4-b.ravelrycache.com/uploads/Cynthia95/465980023/FullSizeRender_2_medium2.jpg',
		  'https://images4-e.ravelrycache.com/uploads/Cynthia95/469450708/file_medium2.jpg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting1.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting2.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting3.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting7.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting4.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting5.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting6.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/knitting8.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/origami1.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/origami2.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/origami3.JPG',
		];
	const PHOTO_SET_WHISKY =[
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky1.jpg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky2.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky6.jpg',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky8.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky3.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky15.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky9.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky10.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky11.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky12.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky13.JPG',
		'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky14.JPG',
		// 'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky16.JPG',
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
					<Gallery images={PHOTO_SET_BONNIE} maxImagePerColumn={3} alt="a white bichon frise dog" />
				</div>

				<div>

					<h2>
						Fact #2 - I love whisky
					</h2>

						<Gallery images={PHOTO_SET_WHISKY} maxImagePerColumn={3} alt="scottish whisky"/>

				</div>

				<div id="fact-3">
					<h2>
						Fact #3 - I love anything handiwork-related
					</h2>
					<Gallery images={PHOTO_SET_KNITTING} maxImagePerColumn={4} alt="handiwork"/>
				</div>

				
			</div>
		)
	}
}

export default About;