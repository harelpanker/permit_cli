import Background from '@/components/layout/background';
import Section from '@/components/ui/section';
import Container from '@/components/ui/container';
import HomeCards from '@/components/home-page/cards-section/home-cards';
import SubscribeCards from '@/components/subscribe-page/subscribe-cards';
import CTA from '@/components/home-page/cards-section/cta';
import Header from '@/components/layout/section-header';

import background from '@/assets/home-page/cards-section/background.svg';
import backgroundMobile from '@/assets/home-page/cards-section/background-mobile.svg';

export default function CardsSection({
	isHomePage = true,
	isSubscribePage = false,
	title,
	subtitle,
}: {
	isHomePage: boolean;
	isSubscribePage?: boolean;
	title: string;
	subtitle: string;
}) {
	return (
		<Background imageDesktop={background} imageMobile={backgroundMobile}>
			<Section className='flex flex-col gap-y-14 !px-0 pt-20 lg:gap-y-24 lg:!px-12 lg:pb-36 lg:pt-24'>
				<Container className='flex flex-col gap-y-14 px-4 lg:gap-y-20 xl:px-0'>
					<Header title={title} subtitle={subtitle} />
					{isHomePage ? <HomeCards /> : null}
					{isSubscribePage ? <SubscribeCards /> : null}
				</Container>

				<CTA />
			</Section>
		</Background>
	);
}
