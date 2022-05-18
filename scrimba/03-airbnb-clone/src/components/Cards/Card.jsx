import CardImage from '../../img/katie-zaferes.png';
import StarIcon from '../../img/star.png';

function Card(props) {
	return (
		<div className="card">
			<div className="tag">{props.tag}</div>
			<img src={CardImage} alt="" />
			<div className="card-rating">
				<img src={StarIcon} alt="" />
				<span className="rating">{props.rating}</span>
				<span className="rating-count">({props.reviewCount})</span>
				<span className="dot"></span>
				<div className="country">{props.country}</div>
			</div>
			<div className="card-description">
				<span>{props.title}</span>
			</div>
			<div className="price">
				<span>
					From ${props.price} <span className="person">/ person</span>
				</span>
			</div>
		</div>
	);
}

export default Card;
