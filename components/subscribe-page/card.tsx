import styles from './styles.module.css';
import Image, { StaticImageData } from 'next/image';
import { CradProps } from '@/components/subscribe-page/cards-data';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import Button from '@/components/ui/button';

import liImage from '@/assets/subscribe-page/cards-section/li.svg';
import eggImage from '@/assets/subscribe-page/cards-section/egg.svg';
import rabbitImage from '@/assets/subscribe-page/cards-section/rabbit.svg';

const CardImage = ({ imageDesktop, title }: { imageDesktop: StaticImageData; title: string }) => {
	return (
		<figure className='hidden lg:block lg:shrink-0'>
			<Image className='w-full' src={imageDesktop} alt={title} />
		</figure>
	);
};

type CardProps = {
	card: CradProps;
	index: number;
	isSurprise: boolean;
	setIsSurprise: (isSurprise: boolean) => void;
};

export default function Card({ card, index, isSurprise, setIsSurprise }: CardProps) {
	return (
		<li className='relative'>
			<div style={{ backgroundColor: card.cardColor }} className={styles.card}>
				<div className={`${styles.cardDate}`}>
					<span>{card.date}</span>
				</div>
				<div className='bg-theme-base-content-variant-2 text-theme-white w-full rounded-lg p-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-10 lg:py-7 xl:flex'>
					{index % 2 === 0 ? <CardImage imageDesktop={card.imageDesktop} title={card.title} /> : null}
					<div className='flex flex-col gap-y-4'>
						<figure className='lg:hidden'>
							<Image className='w-full' src={card.imageMobile} alt={card.title} />
						</figure>

						<div className='flex flex-col gap-y-4'>
							<Heading level={3} className='font-ibm !text-2xl lg:!text-[2rem]'>
								{card.title}
							</Heading>
							<Text className='font-poppins order-first text-sm font-semibold lg:order-last lg:text-lg'>
								Permit Launch Week | Day {index + 1}
							</Text>
						</div>

						<div className='flex w-full max-w-prose flex-col gap-y-2'>
							<Text dangerouslySetInnerHTML={{ __html: card.textTop }} />

							<ul className='flex flex-col gap-y-1'>
								{card.list.map((item, index) => (
									<li className='flex items-start gap-x-2' key={index}>
										<Image className='mt-1 shrink-0' src={liImage} alt='' />
										<Text>{item}</Text>
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
					{index % 2 ? <CardImage imageDesktop={card.imageDesktop} title={card.title} /> : null}
				</div>

				{index === 4 ? (
					<Image
						onClick={() => setIsSurprise(false)}
						className={`absolute inset-0 -left-[9.5rem] bottom-2 top-auto hidden -rotate-90 cursor-pointer transition duration-300 xl:block ${
							isSurprise
								? 'pointer-events-auto translate-x-0 opacity-100'
								: 'pointer-events-none translate-x-4 opacity-0'
						}`}
						src={rabbitImage}
						alt='Surprise Rabbit'
					/>
				) : null}
			</div>
			{index === 3 ? (
				<Image
					onClick={() => setIsSurprise(true)}
					className={`-rotate-30 absolute inset-0 -bottom-10 -left-14 right-auto top-auto z-10 hidden cursor-pointer transition duration-300 xl:block ${
						!isSurprise
							? 'pointer-events-auto translate-x-0 opacity-100'
							: 'pointer-events-none translate-x-4 opacity-0'
					}`}
					src={eggImage}
					alt='Surprise Egg'
				/>
			) : null}
		</li>
	);
}
