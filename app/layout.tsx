import './globals.css';
import type { Metadata } from 'next';
import { ibmPlexMono, poppins } from '@/lib/fonts';
import { metadata as metadataContent } from '@/lib/metadata';
import { ChildrenProps } from '@/lib/type-children';
import DotsBackground from '@/components/layout/dots-background';

export const metadata: Metadata = metadataContent;

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
	return (
		<html lang='en' dir='ltr'>
			<body
				className={`${ibmPlexMono.style} ${poppins.style} font-poppins text-theme-base-content relative flex min-h-screen flex-col antialiased`}>
				<main className='flex-1'>{children}</main>
				<DotsBackground />
			</body>
		</html>
	);
}
