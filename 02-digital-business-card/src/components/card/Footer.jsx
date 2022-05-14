import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer className="card-footer">
			<ul>
				<li>
					<FontAwesomeIcon icon={faGithub} />
				</li>
				<li>
					<FontAwesomeIcon icon={faTwitter} />
				</li>
				<li>
					{' '}
					<FontAwesomeIcon icon={faFacebook} />
				</li>
			</ul>
		</footer>
	);
}
