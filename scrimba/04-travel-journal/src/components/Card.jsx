import React from 'react';
import locationIcon from '../images/locationIcon.svg';

function Card(props) {
	return (
		<div className="card">
			<img className="card-img" src={props.imageUrl} alt="" />
			<div className="info-container">
				<div className="info--location">
					<div className="country">
						<img src={locationIcon} alt="" />
						<div className="country--name">{props.location}</div>
					</div>
					<a href={props.googleMapsUrl} className="google-maps-link">
						View on Google Maps
					</a>
				</div>
				<h2 className="title">{props.title}</h2>
				<h4 className="dates">
					{props.startDate} - {props.endDate}
				</h4>
				<p className="description">{props.description}</p>
			</div>
		</div>
	);
}

export default Card;
