import '../styles/style.css';
import React, { Component } from 'react';
import Header from '../components/Header';
import GoMortarBoard from 'react-icons/lib/go/mortar-board';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';

class CV extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			
			<div className="page-CV">


				<div className="cv-section">
					<div className="cv-section-head">
						<h2>
							Education
						</h2>
						<div className="about-page-icon">
							<GoMortarBoard />
						</div>
					</div>
				
					<div className="cv-item">
						<div className="cv-attribute">
								<h3>
									University of Glasgow
								</h3>
								<div>
									Glasgow, UK
								</div>
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
									Fresenius University of Applied Sciences
								</h3>
								<div>
								Hamburg, Germany
								</div>
						</div>

						<div className="cv-value">
							<div className="cv-value-description">
								<ul>
									<li>BSc Business Psychology</li>
									<li>Main modules: organisational psychology and consulting and international business</li>
									<li>One semester abroad at <b>Shanghai University</b> in 2015</li>
									<li>Acquired the knowledge to conduct (psychological) studies and more importantly, to question and analyse them</li>
								</ul>
							</div>
							<div className="cv-value-timespan">
								2013 - 2016
							</div>
						</div>
					</div>

				</div>


				<div className="cv-section">
					<div className="cv-section-head">
						<h2>
							Experience
						</h2>
						<div className="about-page-icon">
							<FaBriefcase />
						</div>
					</div>

					<div className="cv-item">
						<div className="cv-attribute">
								<h3>
									The Hut Group
								</h3>
								<div>
									Northwich, UK
								</div>
						</div>

						<div className="cv-value">
							<div className="cv-value-description">
								<ul>
									<li>Graduate Software Engineer</li>
									<li>I do whatever that needs to be fixed or built in either back- or frontend</li>
									<li>Purely web-development</li>
									<li>Here is where I first got real contact with frontend technologies</li>
									<li>Main technologies: Java, JavaScript, Sass</li>
								</ul>
							</div>
							<div className="cv-value-timespan">
								since 2017
							</div>
						</div>
					</div>

				</div>

				<div className="cv-section">
					<div className="cv-section-head">
						<h2>
							Extras
						</h2>
						<div className="about-page-icon">
							<TiWeatherSnow />
						</div>
					</div>
				</div>
			
			</div>


		)
	}
}

export default CV;