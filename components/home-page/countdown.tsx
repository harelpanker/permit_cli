'use client';

import React, { useState, useEffect } from 'react';
import { SlidingNumber } from '../motion-primitives/sliding-number';

interface CountdownProps {
	targetDate?: Date;
}

const Span = () => <span className='text-theme-base-content-variant'>:</span>;

const Countdown: React.FC<CountdownProps> = ({ targetDate = new Date('2025-04-24T08:00:00') }) => {
	const [timeRemaining, setTimeRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [hasEnded, setHasEnded] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const difference = targetDate.getTime() - now;

			if (difference < 0) {
				clearInterval(interval);
				setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				setHasEnded(true); // Set hasEnded to true
				return;
			}

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((difference % (1000 * 60)) / 1000);

			setTimeRemaining({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, [targetDate]);

	if (hasEnded) {
		return <div>Event has ended!</div>;
	}

	return (
		<div className='font-ibm mx-auto flex gap-x-4 text-2xl font-semibold lg:gap-x-6 lg:text-4xl'>
			<SlidingNumber value={timeRemaining.days} padStart={true} />
			<Span />
			<SlidingNumber value={timeRemaining.hours} padStart={true} />
			<Span />
			<SlidingNumber value={timeRemaining.minutes} padStart={true} />
			<Span />
			<SlidingNumber value={timeRemaining.seconds} padStart={true} />
		</div>
	);
};

export default Countdown;
