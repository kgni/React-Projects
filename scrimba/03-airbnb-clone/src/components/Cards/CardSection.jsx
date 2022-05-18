import Card from './Card';
import KatieZaferesImg from '../../img/katie-zaferes.png';

import './CardSection.css';

function CardSection() {
	return (
		<section className="card-section">
			<Card
				tag="sold out"
				img={KatieZaferesImg}
				rating="5.0"
				reviewCount={6}
				country="USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/>
			<Card
				tag="online"
				img={KatieZaferesImg}
				rating="5.0"
				reviewCount={6}
				country="USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/>
			<Card
				img={KatieZaferesImg}
				rating="5.0"
				reviewCount={6}
				country="USA"
				title="Life Lessons with Katie Zaferes"
				price={136}
			/>
		</section>
	);
}

export default CardSection;
