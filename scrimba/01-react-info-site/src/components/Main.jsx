import React from 'react';
import BgIcon from '../images/icon-bg.png';

export function Main() {
	return (
		<main className="main-content">
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100k starts on GitHub</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
			<img className="bg-icon" src={BgIcon} alt="" />
		</main>
	);
}
