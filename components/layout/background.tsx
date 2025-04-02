import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

import bg_ui_desktop from '@/assets/layout/bg_section_ui_desktop.svg';
import bg_ui_mobile from '@/assets/layout/bg_section_ui_mobile.svg';

type SectionBGWrapperProps = {
	children: React.ReactNode;
	showMobileImage?: boolean;
	imageMobile?: StaticImageData;
	imageDesktop?: StaticImageData;
	className?: string;
};

export default function Background({
	children,
	className,
	showMobileImage = true,
	imageMobile = bg_ui_mobile,
	imageDesktop = bg_ui_desktop,
}: SectionBGWrapperProps) {
	return (
		<div className='relative z-10 overflow-clip'>
			<div className={clsx(className, 'relative z-30')}>{children}</div>
			<figure className='absolute left-0 top-0 z-10 w-full'>
				<Image src={imageDesktop} alt='' className='hidden w-full lg:block' />
				{showMobileImage ? <Image src={imageMobile} alt='' className='w-full lg:hidden' /> : null}
			</figure>
		</div>
	);
}
