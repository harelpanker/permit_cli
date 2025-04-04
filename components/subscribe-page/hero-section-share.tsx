'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { useViewportSize } from '@mantine/hooks';
import { TwitterShareButton } from 'react-share';

import icon from '@/assets/layout/x-twitter.svg';
import imageMobile from '@/assets/subscribe-page/hero-section/cards-group-mobile.svg';
import imageDesktop from '@/assets/subscribe-page/hero-section/cards-group-desktop.svg';

const shareText = `I'm attending the Permit CLI Launch Week! 🚀

Join me for a week of live coding, learning, and unhinged @permit_io SWAG 🤖

Register now:`;

export default function HeroSectionShare({ name = 'Gabriel Manor', number = 304 }: { name?: string; number?: number }) {
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
				<div className='absolute inset-0 right-0 z-20 flex h-full w-full max-w-[8.375rem] flex-col justify-end gap-y-1 p-2 pb-8 pl-3 sm:left-auto sm:max-w-[11.75rem] sm:pb-10 sm:pl-4 lg:-bottom-16'>
					<div className='text-base font-medium leading-tight lg:text-2xl'>{name}</div>
					<div className='text-3xl font-semibold lg:text-5xl'>#{number}</div>
					<p className='text-xs font-medium lg:text-base'>March 28-31|2025 Virtual</p>
				</div>
			</figure>

			{/* right */}
			<div className='flex w-full max-w-[12.75rem] flex-col gap-y-3 sm:max-w-[22rem] lg:gap-y-5'>
				<Heading className='!text-base sm:!text-[1.625rem]' level={3}>
					Share your ticket for a chance to win a sticker pack
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
