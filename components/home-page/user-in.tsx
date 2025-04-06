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
				<CardsSection
					name={name || ''}
					isSubscribePage={true}
					isHomePage={false}
					title='Subscribe to our exclusive CLI livestreams'
					subtitle='Join us for 5 days of exciting new releases'
				/>
			</main>
			<ExitModal subscribePage />
		</>
	);
}
