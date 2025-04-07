'use client';

import { useState, useEffect } from 'react';
import { usePageLeave, useViewportSize } from '@mantine/hooks';
import { Dialog, DialogContent, DialogClose } from '@/components/motion-primitives/dialog';
import { Heading } from '@/components/ui/heading';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Cookies from 'js-cookie';

import logo from '@/assets/layout/modal-logo.svg';
import backgroundMobile from '@/assets/layout/modal-mobile.png';
import backgroundDesktop from '@/assets/layout/modal-desktop.png';

export default function ExitModal({ subscribePage = false }: { subscribePage: boolean }) {
	const desktopWidth = 1024;
	const { width } = useViewportSize();
	const [isOpen, setIsOpen] = useState(false);

	const [leftsCount, setLeftsCount] = useState(() => {
		const saved = Cookies.get('leftsCount');
		return saved ? parseInt(saved, 10) : 0;
	});

	const close = () => setIsOpen(false);

	// Show modal on first exit
	usePageLeave(() => {
		setLeftsCount((prev) => {
			const updated = prev + 1;
			Cookies.set('leftsCount', updated.toString(), { expires: 1 });

			// Only show modal the first time
			if (prev < 1) {
				setIsOpen(true);
			}

			return updated;
		});
	});

	// Mobile exit intent
	useEffect(() => {
		let lastY = window.scrollY;

		const onScroll = () => {
			const directionUp = window.scrollY < lastY;
			lastY = window.scrollY;

			if (directionUp && window.scrollY < 160 && leftsCount < 1) {
				// console.log('Possible exit intent on mobile');
				setIsOpen(true);
				setLeftsCount((prev) => {
					const updated = prev + 1;
					Cookies.set('leftsCount', updated.toString(), { expires: 7 });
					return updated;
				});
			}
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [leftsCount]);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent>
				<div
					className={`bg-theme-base-content relative flex h-full w-full grow flex-col items-center justify-between overflow-hidden rounded-xl text-center lg:items-start lg:text-left`}>
					<div className='text-theme-white relative z-20 flex grow flex-col items-center justify-between gap-y-4 p-4 pt-6 lg:items-start lg:p-8 lg:pb-14'>
						<Image src={logo} alt='logo' className='max-w-[90%]' />
						<div className='flex flex-col items-center gap-y-5 lg:items-start'>
							<Heading className='font-ibm !text-[1.4rem] lg:!text-[2.25rem]' level={2}>
								<span className='block'>Join the livestreams </span> for a Daily Live Raffle!{' '}
								<span className='lg:block'>Win a Custom Keyboard!</span>
							</Heading>
							{subscribePage ? (
								<Button onClick={() => close()} href='#subscribe' text='Sign Up for Livestreams' icon={false} />
							) : (
								<Button onClick={() => close()} />
							)}
						</div>
					</div>

					<Image
						className='absolute inset-0 z-10 h-full w-full object-cover'
						src={width > desktopWidth ? backgroundDesktop : backgroundMobile}
						alt='exit modal'
					/>
				</div>
				<DialogClose />
			</DialogContent>
		</Dialog>
	);
}

{
	/* <button
	onClick={() => {
		Cookies.set('leftsCount', '0', { expires: 1 });
		setLeftsCount(0);
	}}>
	Clear Exit Count Cookie
</button>; */
}
