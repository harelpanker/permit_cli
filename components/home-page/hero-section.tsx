import Image from 'next/image';
import Section from '@/components/ui/section';
import Background from '@/components/layout/background';
import Container from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import Countdown from '@/components/layout/countdown';
import { Text } from '@/components/ui/text';
import Button from '@/components/ui/button';
import HeroDog from '@/components/home-page/hero-section/hero-dog';

import heroMain from '@/assets/home-page/hero-section/cli_launch_week.svg';
import backgroundImage from '@/assets/home-page/hero-section/background.svg';
import logo from '@/assets/home-page/hero-section/logo.svg';

export default function HeroSection() {
	return (
		<Background imageDesktop={backgroundImage}>
			<Section className='flex flex-col py-14 text-center lg:gap-y-12 lg:py-28 lg:text-left'>
				<Container className='hidden lg:flex'>
					<Image priority src={logo} alt='Permit.io' />
				</Container>
				<Container className='max-w-sm md:max-w-3xl lg:flex lg:max-w-[66.565rem] lg:items-center lg:justify-between lg:gap-x-12 xl:gap-x-8'>
					<div className='flex flex-col gap-y-12'>
						<div className='flex flex-col gap-y-6'>
							<figure className='max-w-3/4 mx-auto w-full lg:mx-0 lg:max-w-max'>
								<Image priority src={heroMain} alt='Permit.io CLI Launch Week' />
							</figure>

							<Heading level={1}>Developer-First Integrated Authorization</Heading>

							<div className='block lg:hidden'>
								<HeroDog />
							</div>

							<Countdown className='lg:mx-0' />
						</div>

						<div className='flex flex-col gap-y-6'>
							<Text className='text-theme-base-content-variant text-lg font-semibold'>
								Subscribe to stay tuned for each launch and a chance to win SWAG!
							</Text>
							<div className='flex w-full items-center justify-center lg:justify-start'>
								<Button />
							</div>
						</div>
					</div>
					<div className='hidden lg:block lg:shrink-0'>
						<HeroDog />
					</div>
				</Container>
				<hr className='from-theme-orange to-theme-purple absolute bottom-0 left-0 top-auto h-[2px] w-full border-none bg-gradient-to-r' />
			</Section>
		</Background>
	);
}
