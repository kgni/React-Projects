import React from 'react';
import './MemeContainer.css';

const MemeContainer = (props) => {
	return <section className="meme-container">{props.children}</section>;
};

export default MemeContainer;
