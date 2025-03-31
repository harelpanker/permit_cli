import clsx from 'clsx';

type SectionProps = {
	element?: 'section' | 'header';
} & React.ComponentPropsWithoutRef<'section' | 'header'>;

export default function Section({ className, element = 'section', children, ...props }: SectionProps) {
	const Element = element;
	return (
		<Element {...props} className={clsx(className, `relative z-20 px-5 lg:px-14`)}>
			{children}
		</Element>
	);
}
