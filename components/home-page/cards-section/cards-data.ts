import { StaticImageData } from 'next/image';
import cardDesktop1 from '@/assets/home-page/cards-section/card-desktop-1.svg';
import cardDesktop2 from '@/assets/home-page/cards-section/card-desktop-2.svg';
import cardDesktop3 from '@/assets/home-page/cards-section/card-desktop-3.svg';
import cardDesktop4 from '@/assets/home-page/cards-section/card-desktop-4.svg';
import cardDesktop5 from '@/assets/home-page/cards-section/card-desktop-5.svg';
import cardMobile1 from '@/assets/home-page/cards-section/card-mobile-1.svg';
import cardMobile2 from '@/assets/home-page/cards-section/card-mobile-2.svg';
import cardMobile3 from '@/assets/home-page/cards-section/card-mobile-3.svg';
import cardMobile4 from '@/assets/home-page/cards-section/card-mobile-4.svg';
import cardMobile5 from '@/assets/home-page/cards-section/card-mobile-5.svg';
import cardFrameDesktop1 from '@/assets/home-page/cards-section/card1-desktop.svg';
import cardFrameDesktop2 from '@/assets/home-page/cards-section/card2-desktop.svg';
import cardFrameDesktop3 from '@/assets/home-page/cards-section/card3-desktop.svg';
import cardFrameDesktop4 from '@/assets/home-page/cards-section/card4-desktop.svg';
import cardFrameDesktop5 from '@/assets/home-page/cards-section/card5-desktop.svg';
import cardFrameMobile1 from '@/assets/home-page/cards-section/card1-mobile.svg';
import cardFrameMobile2 from '@/assets/home-page/cards-section/card2-mobile.svg';
import cardFrameMobile3 from '@/assets/home-page/cards-section/card3-mobile.svg';
import cardFrameMobile4 from '@/assets/home-page/cards-section/card4-mobile.svg';
import cardFrameMobile5 from '@/assets/home-page/cards-section/card5-mobile.svg';

export interface CardProps {
	textDate: string;
	title: string;
	imageDesktop: StaticImageData;
	imageMobile: StaticImageData;
	cardFrameDesktop: StaticImageData;
	cardFrameMobile: StaticImageData;
	link: string;
}

export const cardsData: CardProps[] = [
	{
		textDate: '21/04',
		title: 'Full CI/CD Support for Authorization',
		link: 'https://lu.ma/plkwvl5v',
		imageDesktop: cardDesktop1,
		imageMobile: cardMobile1,
		cardFrameDesktop: cardFrameDesktop1,
		cardFrameMobile: cardFrameMobile1,
	},
	{
		textDate: '22/04',
		title: 'Fine-Grained Authorization Redefined',
		link: 'https://lu.ma/ky30z875',
		imageDesktop: cardDesktop2,
		imageMobile: cardMobile2,
		cardFrameDesktop: cardFrameDesktop2,
		cardFrameMobile: cardFrameMobile2,
	},
	{
		textDate: '23/04',
		title: 'Zero-Effort Policy Testing',
		link: 'https://lu.ma/h3dz6yz8',
		imageDesktop: cardDesktop3,
		imageMobile: cardMobile3,
		cardFrameDesktop: cardFrameDesktop3,
		cardFrameMobile: cardFrameMobile3,
	},
	{
		textDate: '24/04',
		title: 'API-First Authorization',
		link: 'https://lu.ma/tnogkouo',
		imageDesktop: cardDesktop4,
		imageMobile: cardMobile4,
		cardFrameDesktop: cardFrameDesktop4,
		cardFrameMobile: cardFrameMobile4,
	},
	{
		textDate: '25/04',
		title: 'A Better Rego Experience',
		link: 'https://lu.ma/gekpc41k',
		imageDesktop: cardDesktop5,
		imageMobile: cardMobile5,
		cardFrameDesktop: cardFrameDesktop5,
		cardFrameMobile: cardFrameMobile5,
	},
];
