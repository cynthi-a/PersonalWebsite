import '../styles/style.css';
import React, { Component } from 'react';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import xing from '../img/xing.png';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiMail from 'react-icons/lib/ti/mail';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import Helmet from 'react-helmet'
import TemplateWrapper from '../components/default';

class Contact extends Component {

	render() {
		return (
			<TemplateWrapper>
				<div className="page-Contact">
					<Helmet>
						<title>Cynthia Lee | Contact</title>
					</Helmet>

					<div className="page-Content-start">
						<h2>Get in touch - There isn't just one way of doing it</h2>
					</div>


					<div className="contact-links">
						<div className="contact-link">
							<a href="mailto:cynthia.htlee@gmail.com">
								<div className="contact-link-icon">
									<TiMail />
								</div>
								Email
						</a>
						</div>
						<div className="contact-link">
							<a href="https://github.com/cynthi-a" target="_blank" rel="noopener noreferrer">
								<div className="contact-link-icon">
									<TiSocialGithub />
								</div>
								GitHub
						</a>
						</div>
						<div className="contact-link">
							<a href="https://www.xing.com/profile/Cynthia_Lee6/cv?sc_o=mxb_p" target="_blank" rel="noopener noreferrer">
								<div className="contact-link-icon">
									<img src={xing} alt="Xing Logo" />
								</div>
								XING
						</a>
						</div>
						<div className="contact-link">
							<a href="https://www.facebook.com/CynthiaHTLee" target="_blank" rel="noopener noreferrer">
								<div className="contact-link-icon">
									<TiSocialFacebook />
								</div>
								Facebook
						</a>
						</div>

						<div className="contact-link">
							<a href="https://www.linkedin.com/in/cynthia-ht-lee/" target="_blank" rel="noopener noreferrer">
								<div className="contact-link-icon">
									<TiSocialLinkedin />
								</div>
								LinkedIn
						</a>
						</div>


					</div>
					<div className="page-Contact-end">
						<h3>
							But where is Instagram?
					</h3>
						<p>
							Cannot find instagram? Do not fret. If you are really that keen, you
							can see unreasonably staged images of me in unusual environments in my About section instead.
					</p>
						<p>
							#noinstagram #special
					</p>
					</div>

				</div>

			</TemplateWrapper>

		)
	}
}

export default Contact;
