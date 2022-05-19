import './CardSection.css';

function Card(props) {
	let badgeText;
	if (props.card.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.card.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className="card">
			{badgeText && <div className="tag">{badgeText}</div>}
			<img className="star" src={`./img/${props.card.coverImg}`} alt="" />
			<div className="card-rating">
				<img src="img/star.png" alt="" />
				<span className="rating">{props.card.rating}</span>
				<span className="rating-count">({props.card.stats.reviewCount})</span>
				<span className="dot"></span>
				<div className="country">{props.card.location}</div>
			</div>
			<div className="card-description">
				<span>{props.card.title}</span>
			</div>
			<div className="price">
				<span>
					From ${props.card.price} <span className="person">/ person</span>
				</span>
			</div>
		</div>
	);
}

export default Card;
