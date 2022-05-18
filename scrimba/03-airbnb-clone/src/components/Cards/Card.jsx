import CardImage from '../../img/katie-zaferes.png';
import StarIcon from '../../img/star.png';

function Card() {
	return (
		<div className="card">
			<div className="tag">sold out</div>
			<img src={CardImage} alt="" />
			<div className="card-rating">
				<img src={StarIcon} alt="" />
				<span className="rating">5.0</span>
				<span className="rating-count">(6)</span>
				<span className="dot"></span>
				<div className="country">USA</div>
			</div>
			<div className="card-description">
				<span>Life lessons with Katie Zaferes</span>
			</div>
			<div className="price">
				<span>
					From $136 <span className="person">/ person</span>
				</span>
			</div>
		</div>
	);
}

export default Card;
