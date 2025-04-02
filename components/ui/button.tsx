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
	href?: string;
}

const Button: React.FC<ButtonProps> = ({
	text = 'Subscribe to Event',
	icon = true,
	iconSrc,
	primary = true,
	secondary = false,
	isSmall = false,
	href,
	onClick,
	className = '',
	...props
}) => {
	const commonClasses = clsx(
		className,
		`text-theme-white inline-flex cursor-pointer items-center rounded-full border-2 font-semibold tracking-tight transition duration-300 
		${primary ? 'bg-theme-purple hover:bg-theme-purple/85 border-theme-purple' : null}
		${isSmall ? 'gap-x-2 px-2 py-1.5 text-base' : 'gap-x-3 px-6 py-[0.625rem] text-lg'}
		${secondary ? 'border-theme-57433c bg-theme-453530 hover:bg-theme-57433c' : null}`
	);

	const innerContent = (
		<>
			{icon ? <Image src={iconSrc ? iconSrc : github} alt={text} /> : null}
			<span>{text}</span>
		</>
	);

	return href ? (
		<a href={href} target='_blank' rel='noopener noreferrer' className={commonClasses}>
			{innerContent}
		</a>
	) : (
		<button {...props} onClick={onClick} className={commonClasses}>
			{innerContent}
		</button>
	);
};

export default Button;
