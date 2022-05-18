import './CardSection.css';

function Card(props) {
	return (
		<div className="card">
			<img className="star" src={`./img/${props.img}`} alt="" />
			<div className="card-rating">
				<img src="img/star.png" alt="" />
				<span className="rating">{props.rating}</span>
				<span className="rating-count">({props.reviewCount})</span>
				<span className="dot"></span>
				<div className="country">{props.location}</div>
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
