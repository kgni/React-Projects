import './CardSection.css';

function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className="card">
			{badgeText && <div className="tag">{badgeText}</div>}
			<img className="star" src={`./img/${props.coverImg}`} alt="" />
			<div className="card-rating">
				<img src="img/star.png" alt="" />
				<span className="rating">{props.rating}</span>
				<span className="rating-count">({props.stats.reviewCount})</span>
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
