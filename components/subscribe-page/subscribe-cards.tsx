import { cardsData } from '@/components/subscribe-page/cards-data';
import Card from '@/components/subscribe-page/card';

export default function SubscribeCards() {
	return (
		<ul className='flex flex-col gap-y-6 md:gap-y-24'>
			{cardsData.map((card, index) => (
				<Card key={card.title} card={card} index={index} />
			))}
		</ul>
	);
}
