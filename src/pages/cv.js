import '../styles/style.css';
import TemplateWrapper from '../components/default';
import React, { Component } from 'react';
import GoMortarBoard from 'react-icons/lib/go/mortar-board';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';
import MdFileDownload from 'react-icons/lib/md/file-download';
import CvPdf from '../img/cv.pdf';
import IoIosHome from 'react-icons/lib/io/ios-home';
import TiMail from 'react-icons/lib/ti/mail';
import Helmet from 'react-helmet'

class CV extends Component {

	render() {
		return (
			<TemplateWrapper>

				<div className="page-CV">

					<Helmet>
						<title>Cynthia Lee | CV</title>
					</Helmet>

					<div className="cv-print-header">
						<div className="cv-name">
							<h1>Cynthia Lee</h1>
						</div>
						<div className="cv-contact-info">
							<ul>
								<li>
									<IoIosHome /><span> </span>
								E14 9BF London
              </li>

								<li>
									<TiMail /><span> </span>
									cynthia.htlee@gmail.com
              </li>

							</ul>
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
									<a href="https://www.askattest.com/" target="_blank" rel="noopener noreferrer">Attest</a>
								</h3>
								<div>
									London, UK
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>Backend Engineer on the Platform squad</li>
										<li>Automating, and optimizing product critical deployments in AWS</li>
										<li>Supporting my squad to develop product thinking/culture</li>
										<li>Improving developer workflow, increasing scalability, and optimizing speed</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									since 08/2019
							</div>
							</div>
						</div>

						<div className="cv-item">
							<div className="cv-attribute">
								<h3>
									<a href="https://www.thoughtworks.com/" target="_blank" rel="noopener noreferrer">ThoughtWorks</a>
								</h3>
								<div>
									London, UK
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>Software Engineer</li>
										<li>Consulting and advisory</li>
										<li>Showing full flexibility in terms of learning new technologies</li>
										<li>Working in various domains</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									08/2018 - 07/2019
							</div>
							</div>
						</div>

						<div className="cv-item">
							<div className="cv-attribute">
								<h3>
									<a href="https://www.thehutgroup.com/" target="_blank" rel="noopener noreferrer">The Hut Group</a>
								</h3>
								<div>
									Northwich, UK
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>Graduate Software Engineer</li>
										<li>Fullstack web development, from services to user interfaces, of various e-commerce sites (e.g. Nintento Online Store, MyProtein, Illamasqua, Probikekit)</li>
										<li>Exposure to lots of other facets of a big tech company e.g. UX and UI design, SEO</li>
										<li>Representing my team at weekly meetings with the business side of the company</li>
										<li>Dealing with legacy systems</li>
										<li>Main technologies: Java, JavaScript, Sass</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									10/2017 - 07/2018
							</div>
							</div>
						</div>

					</div>


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
										<li>Main language taught was Java</li>
										<li>Several projects using different technologies including Java, Python, PostgreSQL</li>
										<li>Final year project: Social robotics and human-robot interaction,
										experimental project design with robot Furhat</li>
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
										<li>Acquired the knowledge to conduct (psychological) studies and more importantly, to question and analyse them</li>
										<li>Final year project, New Work movement, Evaluation of agile organisational
										structures and their effect on recruitment processes, qualitative content analysis
									of conducted interviews with companies.</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									2013 - 2016
							</div>
							</div>
						</div>

						<div className="cv-item">
							<div className="cv-attribute">
								<h3>
									Shanghai University
								</h3>
								<div>
									Shanghai, China
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>Semester abroad</li>
										<li>Emphasis: International Business Management</li>
										<li>Other modules include HR management and international finance</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									Summer 2015
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

						<div className="cv-item">
							<div className="cv-attribute">
								<h3>
									HackManchester 2018
								</h3>
								<div>
									Manchester, UK
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>Winner of the title challenge, Best in Show</li>
										<li>First all-women team to win the prize</li>
										<li>25 hours of coding</li>
										<li>Product: IoT-buttons-controlled "time machine"</li>
										<li>Main technologies: .Net Core, JavaScript</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									10/2018
							</div>
							</div>
						</div>

						<div className="cv-item">
							<div className="cv-attribute">
								<h3>
									HackZurich 2017
								</h3>
								<div>
									Zurich, Switzerland
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>Europe's biggest hackathon (550 teams)</li>
										<li>40 hours of nonstop coding</li>
										<li>Building of a voice-controlled presentation app that works offline</li>
										<li>I was part of a great team and our submission made it into the final</li>
										<li>Check out the <a href="https://github.com/cynthi-a/GlasgowRangers">GitHub repo</a></li>
										<li>Main technology: Python (Django)</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									09/2017
							</div>
							</div>
						</div>

						<div className="cv-item">
							<div className="cv-attribute">
								<h3>
									StirHack 2017
								</h3>
								<div>
									Stirling, UK
								</div>
							</div>

							<div className="cv-value">
								<div className="cv-value-description">
									<ul>
										<li>First hackathon experience</li>
										<li>App to let students report maintenance issues at university</li>
										<li>My team and I won the AWS category price with our submission</li>
										<li>Main technology: Python (Django)</li>
									</ul>
								</div>
								<div className="cv-value-timespan">
									02/2017
							</div>
							</div>
						</div>
					</div>
					<a href={CvPdf} download="cv_cynthia_lee">
						<div className="cv-download">
							<div>
								<h2>Download PDF</h2>
							</div>
							<div className="cv-download-button">
								<MdFileDownload />
							</div>
						</div>
					</a>
				</div>

			</TemplateWrapper>
		)
	}
}

export default CV;
