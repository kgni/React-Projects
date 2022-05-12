import React from 'react';
import ReactLogo from '../images/logo512.png';

export function Navbar() {
	return (
		<header className="main-header">
			<nav className="main-nav">
				<div className="logo">
					<img className="img-logo" src={ReactLogo} alt="React logo" />
					<h2 className="card-title">React Facts</h2>
				</div>
				<h3 className="project-title">React Course - Project 1</h3>
			</nav>
		</header>
	);
}
