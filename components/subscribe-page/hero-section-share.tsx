'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { useViewportSize } from '@mantine/hooks';
import { TwitterShareButton } from 'react-share';
import UserData from '@/components/subscribe-page/user-data';

import icon from '@/assets/layout/x-twitter.svg';
import imageMobile from '@/assets/subscribe-page/hero-section/cards-mobile.svg';
import imageDesktop from '@/assets/subscribe-page/hero-section/cards-desktop.svg';

const shareText = `I'm attending the Permit CLI Launch Week! 🚀

Join me for a week of live coding, learning, and unhinged @permit_io SWAG 🤖

Register now:`;

export default function HeroSectionShare({ userName }: { userName?: string }) {
	const mobileWidth = 640;
	const { width } = useViewportSize();
	const [currentUrl, setCurrentUrl] = useState('');

	useEffect(() => {
		if (process) setCurrentUrl(window.location.href);
	}, []);

	return (
		<Container className='bg-theme-ffdcc3 lg:min-h-56 relative -left-7 mt-20 flex w-[100svw] items-center justify-center gap-x-2 rounded-none px-3 text-left sm:left-0 sm:w-full sm:rounded-3xl md:px-10 lg:mt-24 lg:justify-start lg:gap-x-24 lg:px-16 xl:px-24'>
			<figure className='text-theme-white font-ibm relative -mb-4 -mt-4 shrink-0 sm:-mb-10 sm:-mt-9'>
				{width < mobileWidth ? (
					<Image className='relative z-10 sm:hidden' src={imageMobile} alt='Permit.io' priority />
				) : (
					<Image className='relative z-10 hidden sm:block' src={imageDesktop} alt='Permit.io' priority />
				)}
				{userName && <UserData name={userName} />}
			</figure>

			{/* right */}
			<div className='flex w-full max-w-[12.75rem] flex-col gap-y-3 sm:max-w-[22rem] lg:gap-y-5'>
				<Heading className='!text-base sm:!text-[1.625rem]' level={3}>
					Share your Ticket for a Chance to Win a Sticker Pack
				</Heading>
				<div className='flex'>
					{currentUrl && (
						<TwitterShareButton
							url={currentUrl}
							title={shareText}
							id='twitter_share_button'
							hashtags={['permitclilaunchweek']}
							style={{ border: '2px solid' }}
							className='!bg-theme-purple hover:!bg-theme-purple/85 !border-theme-purple !text-theme-white inline-flex cursor-pointer items-center !gap-x-1 whitespace-pre rounded-full !border-2 !py-1 !pl-1 !pr-2 !text-sm !font-semibold tracking-tight transition duration-300 sm:!py-2 sm:!pl-2 sm:!pr-4 sm:!text-lg'>
							<Image src={icon} alt='X' /> Share Your Ticket
						</TwitterShareButton>
					)}
				</div>
			</div>
		</Container>
	);
}
