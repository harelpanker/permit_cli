import HeroSection from '@/components/layout/hero-section';
import MobileNavbar from '@/components/layout/mobile-navbar';
import CardsSection from '@/components/layout/cards-section';
import { getUser } from '@/lib/auth';

export default async function SubscribePage() {
	const user = await getUser();
	const name = user?.user_metadata?.full_name;

	// console.log(user?.user_metadata); // avatar_url && full_name

	return (
		<>
			<MobileNavbar ctaIcon={false} ctaText='Sign Up for Livestreams' href='https://lu.ma/plkwvl5v' />
			<main>
				<HeroSection userName={name || 'Gabriel Manor'} showBottom={false} />
				<CardsSection
					isSubscribePage={true}
					isHomePage={false}
					title='Subscribe to our exclusive CLI livestreams'
					subtitle='Join us for 5 days of exciting new releases'
				/>
			</main>
		</>
	);
}
