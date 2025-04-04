'use client';

import { useState, useEffect } from 'react';
import { useWindowScroll, useViewportSize } from '@mantine/hooks';
import Image from 'next/image';

import dog from '@/assets/home-page/hero-section/dog.svg';
import dogBottom from '@/assets/home-page/hero-section/hero-bottom.svg';
import dogTop from '@/assets/home-page/hero-section/hero-top.svg';

export default function HeroDog() {
	const { width } = useViewportSize();
	const scrollFromTop = width < 1024 ? 30 : 50;
	const [scroll] = useWindowScroll();
	const [state, setState] = useState({
		dogBottom: false,
		dogTop: false,
	});

	useEffect(() => {
		const handleScroll = () => {
			setState({
				dogBottom: scroll.y > scrollFromTop,
				dogTop: scroll.y > scrollFromTop,
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scroll, scrollFromTop]);

	return (
		<figure
			onMouseEnter={() => setState({ dogBottom: true, dogTop: true })}
			onMouseLeave={() => setState({ dogBottom: false, dogTop: false })}
			className='relative mx-auto w-full max-w-[15rem] lg:max-w-[26.75rem]'>
			<Image
				priority
				src={dogBottom}
				alt=''
				className={`max-w-1/2 absolute inset-0 top-[40%] z-10 ${
					state.dogBottom ? `motion-translate-y-loop-[15%] motion-duration-[7s] motion-ease-in-out-cubic` : ''
				}`}
			/>
			<Image priority src={dog} alt='' className='relative z-20' />
			<Image
				priority
				src={dogTop}
				alt=''
				className={`max-w-1/2 absolute inset-0 left-[25%] top-[24%] z-30 ${
					state.dogTop ? `motion-translate-y-loop-[5%] motion-duration-[9s] motion-ease-in-out-cubic` : ''
				}`}
			/>
		</figure>
	);
}
