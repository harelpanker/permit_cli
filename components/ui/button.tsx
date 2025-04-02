import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';
import github from '@/assets/layout/github-white.svg';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	text?: string;
	icon?: boolean;
	iconSrc?: StaticImageData;
	primary?: boolean;
	secondary?: boolean;
	isSmall?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	text = 'Subscribe to Event',
	icon = true,
	iconSrc,
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
				`text-theme-white inline-flex cursor-pointer items-center rounded-full border-2 border-transparent font-semibold tracking-tight transition duration-300 ${
					primary ? ' bg-theme-purple hover:bg-theme-purple/85 border-theme-purple' : null
				} ${isSmall ? 'gap-x-2 px-2 py-1.5 text-base' : 'gap-x-3 px-6 py-[0.625rem] text-lg'} ${secondary ? '' : ''}`
			)}>
			{icon ? <Image src={iconSrc ? iconSrc : github} alt={text} /> : null}
			<span>{text}</span>
		</button>
	);
};

export default Button;
