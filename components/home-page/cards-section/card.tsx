import { Heading } from '@/components/ui/heading';
import Image from 'next/image';
import { CardProps } from './cards-data';

export default function Card({
	link,
	textDate,
	title,
	imageMobile,
	imageDesktop,
	cardFrameMobile,
	cardFrameDesktop,
}: CardProps) {
	return (
		<li>
			<a href={link} className='relative flex lg:transition lg:duration-300 lg:hover:-translate-y-5'>
				<div className='absolute bottom-0 left-1/2 top-1/2 mx-auto flex h-full w-full max-w-[calc(100%-1.25rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-1 pb-[0.625rem] pt-1 sm:gap-y-2'>
					<div className='font-ibm relative text-xs font-semibold sm:flex sm:justify-end sm:text-sm'>{textDate}</div>
					<div className='bg-theme-base-content-variant-2 text-theme-white grid grow grid-cols-2 items-center gap-x-1 rounded-lg px-3 py-2 sm:flex sm:flex-col sm:justify-between'>
						<div className='sm:min-h-16 sm:flex sm:items-center'>
							<Heading level={3} className='font-ibm !text-base font-semibold leading-tight'>
								{title}
							</Heading>
						</div>
						<Image src={imageMobile} className='block w-full sm:hidden' alt='' />
						<Image src={imageDesktop} className='hidden w-full sm:block' alt='' />
					</div>
				</div>

				{/* cards frames */}
				<Image src={cardFrameMobile} className='block w-full sm:hidden' alt='' />
				<Image src={cardFrameDesktop} className='hidden w-full sm:block' alt='' />
			</a>
		</li>
	);
}
