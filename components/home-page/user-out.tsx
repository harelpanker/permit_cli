import CardsSection from '@/components/layout/cards-section';
import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';
import ExitModal from '@/components/motion-primitives/exit-modal';

export default function UserOut() {
	return (
		<>
			<MobileNavbar />
			<main>
				<HeroSection />
				<CardsSection isHomePage={true} isSubscribePage={false} title='Join us for 5 days of Exciting New Releases:' />
			</main>
			<ExitModal subscribePage={false} />
		</>
	);
}
