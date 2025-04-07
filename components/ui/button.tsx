'use client';

import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { ComponentPropsWithoutRef, Fragment, useTransition } from 'react';
import github from '@/assets/layout/github-white.svg';
import { Provider } from '@supabase/supabase-js';
import { loginAction } from '@/actions/users';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	text?: string;
	icon?: boolean;
	iconSrc?: StaticImageData;
	primary?: boolean;
	secondary?: boolean;
	isSmall?: boolean;
	href?: string;
}

export default function Button({
	text = 'Subscribe to the event',
	icon = true,
	iconSrc,
	primary = true,
	secondary = false,
	isSmall = false,
	href,

	className = '',
	...props
}: ButtonProps) {
	const commonClasses = clsx(
		className,
		`button-base${primary ? ' button-primary' : ''}${isSmall ? ' is-small' : ' is-normal'}${
			secondary ? ' button-secondary' : ''
		}`
	);
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const handleClickLoginButton = (provider: Provider) => {
		startTransition(async () => {
			const { errorMessage, url } = await loginAction(provider);
			if (!errorMessage && url) {
				router.push(url);
			} else {
				toast.error(errorMessage || 'Error logging in');
			}
		});
	};

	const innerContent = (
		<Fragment>
			{icon ? <Image src={iconSrc ? iconSrc : github} alt={text} /> : null}
			<span>{text}</span>
		</Fragment>
	);

	return href ? (
		<a
			href={href}
			target={href.includes('https') ? '_blank' : '_self'}
			rel={href.includes('https') ? 'noopener noreferrer' : ''}
			className={commonClasses}>
			{innerContent}
		</a>
	) : (
		<button {...props} disabled={isPending} onClick={() => handleClickLoginButton('github')} className={commonClasses}>
			{isPending ? 'Logging in...' : innerContent}
		</button>
	);
}
