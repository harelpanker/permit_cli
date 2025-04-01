import Image from 'next/image';
import Background from '@/components/layout/background';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { TextSubTitle } from '@/components/ui/text';

import background from '@/assets/home-page/cards-section/background.svg';
import backgroundMobile from '@/assets/home-page/cards-section/background-mobile.svg';
import Header from '@/components/home-page/cards-section/Header';
import Cards from '@/components/home-page/cards-section/Cards';

export default function CardsSection() {
	return (
		<Background className='flex flex-col gap-y-14 lg:gap-y-24' imageDesktop={background} imageMobile={backgroundMobile}>
			<Section className='flex flex-col px-0 lg:px-12'>
				<Container className='flex flex-col gap-y-14 lg:gap-y-20'>
					<Header />
					<Cards />
				</Container>

				<Container className=''></Container>
			</Section>
		</Background>
	);
}
