import React from 'react';

import Info from './card/Info';
import About from './card/About';
import Interests from './card/Interests';
import Footer from './card/Footer';

export default function Card() {
	return (
		<div className="card">
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	);
}
