import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';

export default function SubscribePage() {
	return (
		<>
			<MobileNavbar ctaIcon={false} ctaText='Sign Up for Livestreams' />
			<main>
				<HeroSection showBottom={false} />
			</main>
		</>
	);
}
