'use client';

import { useState } from 'react';
import { cardsData } from '@/components/subscribe-page/cards-data';
import Card from '@/components/subscribe-page/card';

export default function SubscribeCards() {
	const [isSurprise, setIsSurprise] = useState<boolean>(false);

	return (
		<ul className='flex flex-col gap-y-6 md:gap-y-24'>
			{cardsData.map((card, index) => (
				<Card key={card.title} card={card} index={index} isSurprise={isSurprise} setIsSurprise={setIsSurprise} />
			))}
		</ul>
	);
}
