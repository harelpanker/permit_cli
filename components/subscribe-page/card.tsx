import styles from './styles.module.css';
import Image from 'next/image';
import { CradProps } from '@/components/subscribe-page/cards-data';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import Button from '@/components/ui/button';

import liImage from '@/assets/subscribe-page/cards-section/li.svg';

export default function Card({ card, index }: { card: CradProps; index: number }) {
	return (
		<li style={{ backgroundColor: card.cardColor }} className={styles.card}>
			<div className={`${styles.cardDate}`}>
				<span>{card.date}</span>
			</div>
			<div className='bg-theme-base-content-variant-2 text-theme-white w-full rounded-lg p-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-10 lg:py-7'>
				{index % 2 === 0 ? (
					<figure className='hidden lg:block'>
						<Image className='w-full' src={card.imageDesktop} alt={card.title} />
					</figure>
				) : null}
				<div className='flex flex-col gap-y-4'>
					<Text className='text-sm font-semibold'>Permit Launch Week | Day {index + 1}</Text>
					<figure className='lg:hidden'>
						<Image className='w-full' src={card.imageMobile} alt={card.title} />
					</figure>
					<Heading level={3} className='font-ibm !text-2xl'>
						{card.title}
					</Heading>
					<div className='flex w-full max-w-prose flex-col gap-y-2'>
						<Text>
							<span dangerouslySetInnerHTML={{ __html: card.textTop }} />
						</Text>
						<ul className='flex flex-col gap-y-1'>
							{card.list.map((item, index) => (
								<li className='flex items-start gap-x-2' key={index}>
									<Image className='mt-1 shrink-0' src={liImage} alt='' />
									{item}
								</li>
							))}
						</ul>
						<Text>{card.textBottom}</Text>
					</div>
					{/* buttons */}
					<div className='flex flex-wrap gap-4 lg:mt-auto'>
						{card.blogLink !== '' ? (
							<Button secondary primary={false} icon={false} text='Blog Post' href={card.blogLink} />
						) : null}
						<Button
							icon={false}
							text={card.watchLivestremLink !== '' ? 'Watch Livestream' : 'Sign Up for Livestream'}
							href={card.watchLivestremLink !== '' ? card.watchLivestremLink : card.livestreamLink}
						/>
					</div>
				</div>
				{index % 2 ? (
					<figure className='hidden lg:block'>
						<Image className='w-full' src={card.imageDesktop} alt={card.title} />
					</figure>
				) : null}
			</div>
		</li>
	);
}
