'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import Button from '@/components/ui/button';
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
		<Container className='bg-theme-ffdcc3 lg:min-h-52 mt-20 flex items-center justify-between gap-x-2 rounded-3xl px-3 pb-3 pt-5 text-left md:px-10 lg:mt-24 lg:justify-start lg:gap-x-24 lg:px-16 xl:px-24'>
			<figure className='text-theme-white font-ibm relative h-36 w-[9.5rem] max-w-[45%] shrink-0 sm:w-[16.5rem] md:w-[20.5rem]'>
				<Image
					className='absolute bottom-0 right-0 max-w-none lg:-bottom-16'
					src={width < mobileWidth ? imageMobile : imageDesktop}
					alt='Permit.io'
					priority
				/>
				<div className='absolute right-0 flex h-full w-full max-w-[8.375rem] flex-col justify-end gap-y-1 p-2 sm:max-w-[11.75rem] sm:pb-10 lg:-bottom-16'>
					<div className='text-base font-medium leading-tight lg:text-2xl'>{name}</div>
					<div className='text-3xl font-semibold lg:text-5xl'>#{number}</div>
					<p className='text-xs font-medium lg:text-base'>March 28-31|2025 Virtual</p>
				</div>
			</figure>
			<div className='flex w-full max-w-[12.75rem] flex-col gap-y-3 sm:max-w-[22rem]'>
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
							className='!bg-theme-purple hover:bg-theme-purple/85 !border-theme-purple !text-theme-white inline-flex cursor-pointer items-center !gap-x-1 whitespace-pre rounded-full !border-2 !px-1 !py-1 !text-sm !font-semibold tracking-tight transition duration-300 sm:!px-4 sm:!py-2 sm:!text-lg'>
							<Image src={icon} alt={'X'} /> Share Your Ticket
						</TwitterShareButton>
					)}
				</div>
			</div>
		</Container>
	);
}
