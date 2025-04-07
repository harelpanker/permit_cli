import { Heading } from '@/components/ui/heading';

export default function Header({ title }: { title: string }) {
	return (
		<header className='flex flex-col gap-y-3'>
			<Heading className='xl:!text-4xl'>{title}</Heading>
		</header>
	);
}
