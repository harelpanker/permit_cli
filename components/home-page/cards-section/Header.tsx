import { Heading } from '@/components/ui/heading';
import { TextSubTitle } from '@/components/ui/text';

export default function Header() {
	return (
		<header className='flex flex-col gap-y-3'>
			<Heading className='xl:!text-4xl'>Subscribe and reveal our exclusive CLI livestreams:</Heading>
			<TextSubTitle>Join us for 5 days of exciting new releases</TextSubTitle>
		</header>
	);
}
