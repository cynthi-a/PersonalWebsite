import '../styles/style.css';
import React, { Component } from 'react';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import xing from '../img/xing.png';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiMail from 'react-icons/lib/ti/mail';
class Contact extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="page-Contact">
				<div>
					<h2> Get in touch - There isn't just one way of doing it</h2>
					<div className="contact-links">
						<div className="contact-link">
							<a href="mailto:cynthia.htlee@gmail.com">
								<TiMail />
								<div>Email</div>
							</a>
						</div>
						<div className="contact-link">
							<a href="https://github.com/cynthi-a" target="_blank">
								<TiSocialGithub />
							GitHub
							</a>
						</div>
						<div className="contact-link">
							<a href="https://www.xing.com/profile/Cynthia_Lee6/cv?sc_o=mxb_p" target="_blank">
								<img src={xing} alt="Xing Logo" />
							XING
							</a>
						</div>
						<div className="contact-link">
							<a href="https://www.xing.com/profile/Cynthia_Lee6/cv?sc_o=mxb_p" target="_blank">
								<TiSocialFacebook />
							Facebook
							</a>
						</div>
					</div>
				</div>
			</div>

			
		)
	}
}

export default Contact;