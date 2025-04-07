'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import randomImage1 from '@/assets/subscribe-page/hero-section/check.svg';
import randomImage2 from '@/assets/subscribe-page/hero-section/robot.svg';
import randomImage3 from '@/assets/subscribe-page/hero-section/wizard.svg';

export default function UserData({ name }: { name?: string }) {
	const [imageSrc, setImageSrc] = useState(randomImage1);

	useEffect(() => {
		const images = [randomImage1, randomImage2, randomImage3];
		const randomImage = images[Math.floor(Math.random() * images.length)];
		setImageSrc(randomImage);
	}, []);

	return (
		<div className='absolute inset-0 right-0 z-20 flex h-full w-full max-w-[8.375rem] flex-col justify-end gap-y-1 p-2 pb-7 sm:left-auto sm:max-w-[11.75rem] sm:pb-10 sm:pl-4 lg:-bottom-16'>
			<Image
				priority
				src={imageSrc}
				alt='Permit.io'
				className='absolute left-1/2 top-3 max-w-[80%] -translate-x-1/2 sm:static sm:max-w-full sm:translate-x-0'
			/>
			<div className='text-base font-medium leading-tight lg:mt-2 lg:text-xl'>{name}</div>

			<p className='text-[7px] font-medium md:text-[9px]'>April 21-25 | 2025 | Virtual</p>
		</div>
	);
}
