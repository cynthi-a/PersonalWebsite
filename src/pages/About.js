import '../styles/style.css';
import React, { Component } from 'react';
import Header from '../components/Header';
import ThMortarBoard from 'react-icons/lib/ti/mortar-board';

class About extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="component-About">
				<div className="quick-facts">
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
								Pizza Topping
							</h3>
							<div className="fact-value">
								Pineapple
							</div>
						</div>


					</div>
				</div>

				<h1>
					CV
				</h1>

				<div className="cv-section">
					<div className="cv-section-head">
						<h2>
							Education
						</h2>
						<div className="about-page-icon">
							<ThMortarBoard />
						</div>
					</div>
				
					<div className="cv-item">
						<div className="cv-attribute">
								<h3>
									University of Glasgow
								</h3>
						</div>


						<div className="cv-value">
							<div className="cv-value-description">
								<ul>
									<li>MSc Software Development</li>
									<li>One-year, practice-oriented conversion masters degree</li>
									<li>Here is where I learnt how to program</li>
									<li>Main taught language was Java</li>
								</ul>
							</div>
							<div className="cv-value-timespan">
								2016 - 2017
							</div>
						</div>
					</div>
				
					<div className="cv-item">
						<div className="cv-attribute">
								<h3>
									Hochschule Fresenius
								</h3>
						</div>

						<div className="cv-value">
							<div className="cv-value-description">
								<ul>
									<li>BSc Business Psychology</li>
									<li>Main modules: organisational psychology and consulting and international business</li>
									<li>One semester abroad at <bold>Shanhai University</bold> in 2015</li>
									<li>Aquired the knowledge to conduct (psychological) studies and more importantly, to question and analyse them</li>
								</ul>
							</div>
							<div className="cv-value-timespan">
								2013 - 2016
							</div>
						</div>
					</div>

				</div>

				<div className="staged-images">
					<h1>
						A collection of unreasonably staged images of me in unnatural environments
					</h1>
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