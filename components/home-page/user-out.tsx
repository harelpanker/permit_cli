import CardsSection from '@/components/layout/cards-section';
import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';

export default function UserOut() {
	return (
		<>
			<MobileNavbar />
			<main>
				<HeroSection />
				<CardsSection
					isHomePage={true}
					isSubscribePage={false}
					title='Subscribe and reveal our exclusive CLI livestreams:'
					subtitle='Join us for 5 days of exciting new releases'
				/>
			</main>
		</>
	);
}
