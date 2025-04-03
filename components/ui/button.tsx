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
		`button-base ${primary ? 'button-primary' : null} ${isSmall ? 'is-small' : 'is-normal'} ${
			secondary ? 'button-secondary' : null
		}`
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
