import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';
import CardsSection from '@/components/layout/cards-section';
import ExitModal from '@/components/motion-primitives/exit-modal';

export default function UserIn({ name }: { name?: string }) {
	return (
		<>
			<MobileNavbar ctaIcon={false} ctaText='Sign Up for Livestreams' href='#subscribe' />
			<main>
				<HeroSection userName={name || 'Gabriel Manor'} showBottom={false} />
				<CardsSection isSubscribePage={true} isHomePage={false} title='Join us for 5 days of Exciting New Releases:' />
			</main>
			<ExitModal subscribePage />
		</>
	);
}
