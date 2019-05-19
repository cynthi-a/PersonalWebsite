import '../styles/style.css';
import Helmet from 'react-helmet'
import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import TemplateWrapper from '../components/default';

class About extends Component {

	render() {
		const photos_bucket_endpoint = "https://s3.eu-west-2.amazonaws.com/cynthialeesblog/about-pictures/"


		const PHOTO_SET_BONNIE = [
			`${photos_bucket_endpoint}bonnie7.JPG`,
			`${photos_bucket_endpoint}bonnie6.JPG`,
			`${photos_bucket_endpoint}bonnie5.JPG`,
			`${photos_bucket_endpoint}bonnie2.JPG`,
			`${photos_bucket_endpoint}bonnie3.JPG`,
			`${photos_bucket_endpoint}bonnie1.JPG`,
			`${photos_bucket_endpoint}bonnie4.JPG`,
			`${photos_bucket_endpoint}bonnie8.JPG`,
			`${photos_bucket_endpoint}bonnie9.JPG`,
			`${photos_bucket_endpoint}bonnie10.JPG`,
			`${photos_bucket_endpoint}bonnie11.JPG`,
		];

		const PHOTO_SET_KNITTING = [
			`${photos_bucket_endpoint}knitting1.JPG`,
			`${photos_bucket_endpoint}knitting2.JPG`,
			`${photos_bucket_endpoint}knitting3.JPG`,
			`${photos_bucket_endpoint}knitting7.JPG`,
			`${photos_bucket_endpoint}knitting4.JPG`,
			`${photos_bucket_endpoint}knitting5.JPG`,
			`${photos_bucket_endpoint}knitting6.JPG`,
			`${photos_bucket_endpoint}knitting8.JPG`,
			`${photos_bucket_endpoint}origami1.JPG`,
			`${photos_bucket_endpoint}origami2.JPG`,
			`${photos_bucket_endpoint}origami3.JPG`,
		];

		const PHOTO_SET_WHISKY = [
			`${photos_bucket_endpoint}whisky1.JPG`,
			`${photos_bucket_endpoint}whisky2.JPG`,
			`${photos_bucket_endpoint}whisky6.JPG`,
			`${photos_bucket_endpoint}whisky8.JPG`,
			`${photos_bucket_endpoint}whisky3.JPG`,
			`${photos_bucket_endpoint}whisky15.JPG`,
			`${photos_bucket_endpoint}whisky9.JPG`,
			`${photos_bucket_endpoint}whisky10.JPG`,
			`${photos_bucket_endpoint}whisky11.JPG`,
			`${photos_bucket_endpoint}whisky12.JPG`,
			`${photos_bucket_endpoint}whisky13.JPG`,
			`${photos_bucket_endpoint}whisky14.JPG`,
			`${photos_bucket_endpoint}whisky16.JPG`,
		];

		const PHOTO_SET_FOOD = [
			`${photos_bucket_endpoint}food1.JPG`,
			`${photos_bucket_endpoint}food2.JPG`,
			`${photos_bucket_endpoint}food3.JPG`,
			`${photos_bucket_endpoint}food4.JPG`,
			`${photos_bucket_endpoint}food5.JPG`,
			`${photos_bucket_endpoint}food6.JPG`,
			`${photos_bucket_endpoint}food7.JPG`,
			`${photos_bucket_endpoint}food8.JPG`,
		];

		let factsNumber = 1;

		return (
			<TemplateWrapper>
				<div className="page-About">

					<Helmet>
						<title>Cynthia Lee | About</title>
					</Helmet>

					<div className="quick-facts about-section-item">
						<h1>
							Quick Facts
					</h1>
						<div className="facts">

							<div className="fact">
								<h3 className="fact-attribute">
									Spaces or tabs?
							</h3>
								<div className="fact-value">
									Tabs
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

					<div>
						<h1>Pictures say more than words</h1>

						<p>
							Below are some picture galleries that are pretty good at giving an approximation of who I am.
          </p>
					</div>

					<div className="facts-set">
						<span className="facts-description">
							<h2>
								Fact #{factsNumber++} - I love my dog
            </h2>
							<p>To distract from how boring I am. Her name is Bonnie.</p>
						</span>
						<Gallery className="facts-gallery" images={PHOTO_SET_BONNIE} alt="a white bichon frise dog" />
					</div>

					<div className="facts-set">
						<span className="facts-description">
							<h2>
								Fact #{factsNumber++} - I love whisky
            </h2>
							<p>
								I used to be a member of the two whisky societies at Glasgow University.
								I rarely missed a meeting.
								My preference is slightly peated. Either pure or with two drops of water.
            </p>
						</span>

						<Gallery images={PHOTO_SET_WHISKY} alt="scotch whisky" />

					</div>

					<div className="facts-set">
						<span className="facts-description">
							<h2>
								Fact #{factsNumber++} - I love anything handiwork-related
					</h2>
							<p>
								If you're a fellow granny, you can also check my Ravelry projects<span> </span>
								<a href="https://www.ravelry.com/projects/Cynthia95" target="_blank" rel="noopener noreferrer">
									here
						</a>.
					</p>
						</span>
						<Gallery images={PHOTO_SET_KNITTING} alt="handiwork" />
					</div>

					<div className="facts-set">
						<span className="facts-description">
							<h2>
								Fact #{factsNumber++} - I'm a foodie
            </h2>
							<p>
								Being the daughter of a restaurateur, I always had a very special relationship with food.
								I wouldn't even say that I have a very refined palate or something. I just like food.
								One of the big reasons why I ever travel to exotic places is to taste the local cuisine.
            </p>
						</span>
						<Gallery images={PHOTO_SET_FOOD} alt="food" />
					</div>

					<div>
						<h2>
							Fact #{factsNumber++} - Rick and Morty Forever
					</h2>
						<p>
							It's my favourite show and sometimes I think my dog Bonnie is <span> </span>
							<a href="http://rickandmorty.wikia.com/wiki/Snuffles" target="_blank" rel="noopener noreferrer">
								Snowball
						</a>.
	
					</p>
					</div>

				</div>
			</TemplateWrapper>
		)
	}
}

export default About;
