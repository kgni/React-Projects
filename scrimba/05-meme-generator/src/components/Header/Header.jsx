import React from 'react';
import './Header.css';
import TrollFace from '../../images/Troll Face.png';

const Header = () => {
	return (
		<section className="header">
			<div className="title">
				<img src={TrollFace} alt="" className="title__logo" />
				<h2 className="title__text">Meme Generator</h2>
			</div>
		</section>
	);
};

export default Header;
