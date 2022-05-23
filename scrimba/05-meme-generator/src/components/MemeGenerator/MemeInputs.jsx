import React from 'react';
import './MemeInputs.css';
import memeData from '../../memeData';

const MemeInputs = () => {
	const memesArray = memeData.data.memes;
	const randNum = Math.floor(Math.random() * memesArray.length);
	const [memeImg, setMemeImg] = React.useState(
		memeData.data.memes[randNum].url
	);
	function getRandMeme() {
		const randNum = Math.floor(Math.random() * memesArray.length);
		console.log(randNum);
		const url = memesArray[randNum].url;
		console.log(url);
		setMemeImg(url);
	}
	return (
		<>
			<div action="/" method="GET" className="input-form">
				<div className="inputs">
					<input placeholder="Top text..." type="text" />
					<input placeholder="Bottom text..." type="text" />
				</div>
				<button onClick={getRandMeme} className="new-meme-btn">
					Get a new meme image
				</button>
			</div>
			<div className="meme-output">
				<img src={memeImg} alt="" className="meme-output__img" />
			</div>
		</>
	);
};

export default MemeInputs;
