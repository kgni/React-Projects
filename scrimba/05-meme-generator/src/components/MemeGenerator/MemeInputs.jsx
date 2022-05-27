import React from 'react';
import './MemeInputs.css';
import memeData from '../../memeData';

const MemeInputs = () => {
	const [allMemeImages, setAllMemeImages] = React.useState(memeData.data.memes);

	const randNum = Math.floor(Math.random() * allMemeImages.length);

	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		randomImage: allMemeImages[randNum].url,
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setMeme((prevData) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}

	function getRandMeme() {
		const randNum = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[randNum].url;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: url,
			};
		});
	}
	return (
		<>
			<div action="/" method="GET" className="input-form">
				<div className="inputs">
					<input
						onChange={handleChange}
						value={meme.topText}
						name="topText"
						placeholder="Top text..."
						type="text"
					/>
					<input
						onChange={handleChange}
						value={meme.bottomText}
						name="bottomText"
						placeholder="Bottom text..."
						type="text"
					/>
				</div>
				<button onClick={getRandMeme} className="new-meme-btn">
					Get a new meme image
				</button>
			</div>
			<div className="meme-output">
				<img src={meme.randomImage} alt="" className="meme-output__img" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</>
	);
};

export default MemeInputs;
