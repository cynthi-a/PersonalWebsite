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
		  'http://bonniebon.de/images/3.jpeg',
		  'http://bonniebon.de/images/4.jpeg',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie7.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie6.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie5.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie2.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie3.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie1.JPG',
		  'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/bonnie4.JPG',
		];

		const PHOTO_SET_KNITTING =[
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
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky1.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky2.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky6.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky8.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky3.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky15.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky9.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky10.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky11.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky12.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky13.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky14.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/whisky16.JPG',
		];

		const PHOTO_SET_FOOD =[
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food1.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food2.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food3.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food4.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food5.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food6.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food7.JPG',
			'https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/food8.JPG',
		];

		let factsNumber = 1;

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
				
				<p>
					Below are some picture galleries that are pretty good at giving an approximation of who I am.
				</p>

				<div>
					<h2>
						Fact #{factsNumber++} - I love my dog
					</h2>
					<p>To distract from how boring I am. Her name is <a href="http://bonniebon.de" target="_blank">Bonnie</a>.</p>
					<Gallery images={PHOTO_SET_BONNIE} alt="a white bichon frise dog" />
				</div>

				<div>

					<h2>
						Fact #{factsNumber++} - I love whisky
					</h2>
					
					<p>
						I used to be a member of the two whisky societies at Glasgow University. 
						I rarely never missed a meeting. 
						My preference is slightly peated. Either pure or with two drops of water.
					</p>
						<Gallery images={PHOTO_SET_WHISKY} alt="scotch whisky"/>

				</div>

				<div id="fact-3">
					<h2>
						Fact #{factsNumber++} - I love anything handiwork-related
					</h2>
					<p>
						If you're a fellow granny, you can also check my Ravelry projects<span> </span>
						<a href="https://www.ravelry.com/projects/Cynthia95" target="_blank">
							here
						</a>.
					</p>
					<Gallery images={PHOTO_SET_KNITTING} alt="handiwork"/>
				</div>

				<div>
					<h2>
						Fact #{factsNumber++} - I'm a foodie
					</h2>
					<p>
						Being the daughter of a restaurateur, I always had a very special relationship with food.
						I wouldn't even say that have a very refined palate or something. I just like food.
						One of the big reasons why I ever travel to exotic places is to taste the local cuisine.
					</p>
					<Gallery images={PHOTO_SET_FOOD} alt="food"/>
				</div>


				<div>
					<h2>
						Fact #{factsNumber++} - Rick and Morty Forever
					</h2>
					<p>
						It's my favourite show and sometimes I think Bonnie is Snowball.

					</p>
				</div>

			</div>
		)
	}
}

export default About;