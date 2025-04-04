import Image from 'next/image';
import Container from '@/components/ui/container';
import Countdown from '@/components/layout/countdown';
import Button from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { getUser } from '@/lib/auth';

import imageDesktop from '@/assets/home-page/cards-section/cta-desktop.png';
import mobileImage from '@/assets/home-page/cards-section/cta-mobile.png';

export default async function CTA() {
	const user = await getUser();

	return (
		<Container className='bg-theme-ffdcc3 lg:border-theme-ffb381 flex flex-col gap-y-14 px-4 py-20 text-center lg:grid lg:grid-cols-2 lg:gap-x-2 lg:overflow-hidden lg:rounded-[1.25rem] lg:border lg:p-0 lg:text-left'>
			<div className='flex flex-col gap-y-8 lg:justify-center lg:py-6 lg:pl-12'>
				<div className='flex flex-col  gap-y-6'>
					<Heading level={3}>Join the lives treams for a Daily Live Raffle! Win a Custom Keyboard!</Heading>
					<Countdown className='lg:mx-0' />
				</div>
				{!user ? (
					<div className='flex justify-center lg:justify-start'>
						<Button />
					</div>
				) : null}
			</div>
			{/* image */}
			<figure className='mx-auto lg:hidden'>
				<Image src={mobileImage} alt='' />
			</figure>
			<figure className='hidden lg:block'>
				<Image src={imageDesktop} alt='' width={544} height={316} className='lg:h-full lg:max-w-none' />
			</figure>
		</Container>
	);
}
