import CardsSection from '@/components/layout/cards-section';
import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';

export default function Home() {
	return (
		<>
			<MobileNavbar />
			<main>
				<HeroSection />
				<CardsSection
					isHomePage
					title='Subscribe and reveal our exclusive CLI livestreams:'
					subtitle='Join us for 5 days of exciting new releases'
				/>
			</main>
		</>
	);
}
