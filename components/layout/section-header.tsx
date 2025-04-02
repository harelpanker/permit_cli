import { Heading } from '@/components/ui/heading';
import { TextSubTitle } from '@/components/ui/text';

export default function Header({ title, subtitle }: { title: string; subtitle: string }) {
	return (
		<header className='flex flex-col gap-y-3'>
			<Heading className='xl:!text-4xl'>{title}</Heading>
			<TextSubTitle>{subtitle}</TextSubTitle>
		</header>
	);
}
