'use client';

import { useState } from 'react';
import { useWindowScroll } from '@mantine/hooks';
import Image from 'next/image';

import dog from '@/assets/home-page/hero-section/dog.svg';
import dogBottom from '@/assets/home-page/hero-section/hero-bottom.svg';
import dogTop from '@/assets/home-page/hero-section/hero-top.svg';

export default function HeroDog() {
	const scrollFromTop = 50;
	const [scroll] = useWindowScroll();
	const [state, setState] = useState(false);

	return (
		<figure
			onMouseEnter={() => setState(true)}
			onMouseLeave={() => setState(false)}
			className='relative mx-auto w-full max-w-[15rem] lg:max-w-[26.75rem]'>
			<Image
				priority
				src={dogBottom}
				alt=''
				className={`max-w-1/2 absolute inset-0 top-[40%] z-10 ${
					state || scroll.y > scrollFromTop
						? 'motion-translate-y-loop-[15%] motion-duration-[7s] motion-ease-in-out-cubic'
						: ''
				}`}
			/>
			<Image priority src={dog} alt='' className='relative z-20' />
			<Image
				priority
				src={dogTop}
				alt=''
				className={`max-w-1/2 absolute inset-0 left-[25%] top-[24%] z-30 ${
					state || scroll.y > scrollFromTop
						? '-motion-translate-y-loop-[5%] motion-duration-[9s] motion-ease-in-out-cubic'
						: ''
				}`}
			/>
		</figure>
	);
}
