import Image from 'next/image';
import Section from '@/components/ui/section';
import Background from '@/components/layout/background';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import Countdown from '@/components/home-page/countdown';
import { Text } from '@/components/ui/text';
import Button from '@/components/ui/button';

import heroMain from '@/assets/home-page/hero-section/cli_launch_week.svg';
import dog from '@/assets/home-page/hero-section/dog.svg';
import dogBottom from '@/assets/home-page/hero-section/hero-bottom.svg';
import dogTop from '@/assets/home-page/hero-section/hero-top.svg';
import logo from '@/assets/home-page/hero-section/logo.svg';

export default function HeroSection() {
	return (
		<Background>
			<Section className='flex flex-col py-14 text-center lg:gap-y-12 lg:py-28 lg:text-left'>
				<Container className='hidden lg:flex'>
					<Image priority src={logo} alt='Permit.io' />
				</Container>
				<Container className='flex max-w-sm flex-col gap-y-12'>
					<div className='flex flex-col gap-y-6'>
						<figure>
							<Image priority src={heroMain} alt='Permit.io CLI Launch Week' />
						</figure>

						<Heading level={1}>Developer-First Integrated Authorization</Heading>

						<figure className='relative mx-auto w-full max-w-[15rem]'>
							<Image priority src={dogBottom} alt='' className='max-w-1/2 absolute inset-0 top-[40%] z-10' />
							<Image priority src={dog} alt='' className='relative z-20' />
							<Image priority src={dogTop} alt='' className='max-w-1/2 absolute inset-0 left-[25%] top-[24%] z-30' />
						</figure>

						<Countdown />
					</div>

					<div className='flex flex-col gap-y-6'>
						<Text className='text-theme-base-content-variant text-lg font-semibold'>
							Subscribe to stay tuned for each launch and a chance to win SWAG!
						</Text>
						<div className='flex w-full items-center justify-center'>
							<Button />
						</div>
					</div>
				</Container>
			</Section>
		</Background>
	);
}
