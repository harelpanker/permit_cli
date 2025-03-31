import clsx from 'clsx';
import Link from 'next/link';

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
	return <p data-slot='text' {...props} className={clsx(className, 'text-pretty text-base')} />;
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
	return <Link {...props} className={clsx(className, 'hover:opacity-85 transition-opacity duration-300')} />;
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
	return <strong {...props} className={clsx(className, 'font-medium')} />;
}
