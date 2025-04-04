'use client';

import { useState, useEffect } from 'react';

export default function UserData({ name }: { name?: string }) {
	const generate3DigitNumber = () => Math.floor(Math.random() * 900) + 100;
	const [number, setNumber] = useState('301');

	useEffect(() => {
		setNumber(generate3DigitNumber().toString());
	}, []);

	return (
		<div className='absolute inset-0 right-0 z-20 flex h-full w-full max-w-[8.375rem] flex-col justify-end gap-y-1 p-2 pb-8 pl-3 sm:left-auto sm:max-w-[11.75rem] sm:pb-10 sm:pl-4 lg:-bottom-16'>
			<div className='text-base font-medium leading-tight lg:text-2xl'>{name}</div>
			<div className='text-3xl font-semibold lg:text-5xl'>#{number}</div>
			<p className='text-xs font-medium lg:text-base'>March 28-31|2025 Virtual</p>
		</div>
	);
}
