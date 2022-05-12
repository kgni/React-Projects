import React from 'react';
import ProfileImg from '../images/profile-img.jpg';

export default function Info() {
	return (
		<section className="info-section">
			<img className="profile-img" src={ProfileImg} alt="Profile" />
			<div className="info-text">
				<div className="name">Karl Nielsen</div>
				<div className="position">Software Engineer</div>
				<div className="website">www.mdia.dk</div>
			</div>
			<div className="info-links">
				<a href="/" className="email">
					Email
				</a>
				<a href="/" className="linkedin">
					LinkedIn
				</a>
			</div>
		</section>
	);
}
