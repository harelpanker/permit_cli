import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';
import CardsSection from '@/components/layout/cards-section';

export default function SubscribePage() {
	return (
		<>
			<MobileNavbar ctaIcon={false} ctaText='Sign Up for Livestreams' />
			<main>
				<HeroSection showBottom={false} name='Gabriel Manor' number={304} />
				<CardsSection
					isHomePage={false}
					title='Subscribe to our exclusive CLI livestreams'
					subtitle='Join us for 5 days of exciting new releases'
				/>
			</main>
		</>
	);
}
