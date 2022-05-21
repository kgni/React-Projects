import React from 'react';
import './MemeInputs.css';
const MemeInputs = () => {
	return (
		<>
			<form className="input-form">
				<div className="inputs">
					<input placeholder="Top text..." type="text" />
					<input placeholder="Bottom text..." type="text" />
				</div>
				<button className="new-meme-btn">Get a new meme image</button>
			</form>
			<div className="meme-output">
				<img src="" alt="" className="meme-output__img" />
			</div>
		</>
	);
};

export default MemeInputs;
