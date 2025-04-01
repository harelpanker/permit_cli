import Background from '@/components/layout/background';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import Header from '@/components/home-page/cards-section/header';
import Cards from '@/components/home-page/cards-section/cards';

import background from '@/assets/home-page/cards-section/background.svg';
import backgroundMobile from '@/assets/home-page/cards-section/background-mobile.svg';

export default function CardsSection() {
	return (
		<Background imageDesktop={background} imageMobile={backgroundMobile}>
			<Section className='flex flex-col gap-y-14 !px-0 pb-14 pt-20 lg:gap-y-24 lg:px-12 lg:pb-36 lg:pt-24'>
				<Container className='flex flex-col gap-y-14 px-4 lg:gap-y-20 xl:px-0'>
					<Header />
					<Cards />
				</Container>

				<Container className=''></Container>
			</Section>
		</Background>
	);
}
