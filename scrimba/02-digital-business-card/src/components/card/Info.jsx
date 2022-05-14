import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProfileImg from '../../images/profile-img.jpg';

export default function Info() {
	return (
		<section className="info-section">
			<img className="profile-img" src={ProfileImg} alt="Profile" />
			<div className="info-text">
				<h2 className="name">Karl Nielsen</h2>
				<div className="position">Software Engineer</div>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.mdia.dk"
					className="website"
				>
					www.mdia.dk
				</a>
			</div>
			<div className="info-links">
				<a href="/" className="email">
					<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
					Email
				</a>
				<a href="/" className="linkedin">
					<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
					LinkedIn
				</a>
			</div>
		</section>
	);
}
