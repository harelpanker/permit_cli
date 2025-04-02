import CardsSection from '@/components/home-page/cards-section';
import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';

export default function Home() {
	return (
		<>
			<MobileNavbar />
			<main>
				<HeroSection />
				<CardsSection />
			</main>
		</>
	);
}
