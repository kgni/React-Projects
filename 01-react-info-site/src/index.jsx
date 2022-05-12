import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import ReactLogo from './images/logo512.png';
// import App from './App';

function Header() {
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

function Main() {
	return (
		<main className="main-content">
			<h1>Fun facts about React</h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100k starts on GitHub</li>
				<li>Is maintained by Facebook</li>
			</ul>
		</main>
	);
}

function Page() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}

ReactDOM.render(<Page />, document.querySelector('#root'));
