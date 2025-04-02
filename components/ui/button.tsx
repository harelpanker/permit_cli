import clsx from 'clsx';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';
import github from '@/assets/layout/github-white.svg';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	text?: string;
	icon?: boolean;
	primary?: boolean;
	secondary?: boolean;
	isSmall?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	text = 'Subscribe to Event',
	icon = true,
	primary = true,
	secondary = false,
	isSmall = false,
	onClick,
	className = '',
	...props
}) => {
	return (
		<button
			{...props}
			onClick={onClick}
			className={clsx(
				className,
				`text-theme-white inline-flex cursor-pointer items-center gap-x-3 rounded-full border-2 border-transparent font-semibold tracking-tight transition duration-300 ${
					primary ? ' bg-theme-purple hover:bg-theme-purple/85 border-theme-purple' : null
				} ${isSmall ? 'px-4 py-1.5 text-base' : 'px-6 py-[0.625rem] text-lg'}`
			)}>
			{icon ? <Image src={github} alt={text} /> : null}
			<span>{text}</span>
		</button>
	);
};

export default Button;
