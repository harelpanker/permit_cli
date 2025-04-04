'use client';

import Image from 'next/image';
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import Button from '@/components/ui/button';

import logo from '@/assets/layout/logo.svg';

export default function MobileNavbar({
	ctaIcon = true,
	ctaText = 'Subscribe',
	href,
}: {
	ctaIcon?: boolean;
	ctaText?: string;
	href?: string;
}) {
	const mobileWidth = 991;
	const sectionHeight = 776;
	const { width } = useViewportSize();
	const [scroll] = useWindowScroll();

	return (
		<>
			{width < mobileWidth && (
				<header
					className={`${
						scroll.y > sectionHeight ? 'translate-y-0' : '-translate-y-full'
					} min-h-16 border-b-theme-eaddd7 fixed top-0 z-30 flex w-full items-center justify-between border-b bg-[rgba(255,237,222,0.20)] px-4 py-2 backdrop-blur-lg transition duration-300`}>
					<Image src={logo} alt='Permit.io logo' priority />
					<Button href={href} text={ctaText} isSmall icon={ctaIcon} />
				</header>
			)}
		</>
	);
}
