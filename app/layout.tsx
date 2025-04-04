import './globals.css';
import type { Metadata } from 'next';
import { ibmPlexMono, poppins, inter } from '@/lib/fonts';
import { metadata as metadataContent } from '@/lib/metadata';
import { ChildrenProps } from '@/lib/type-children';
import DotsBackground from '@/components/layout/dots-background';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = metadataContent;

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
	return (
		<html lang='en' dir='ltr'>
			<body
				className={`${ibmPlexMono.style} ${poppins.style} ${inter.style} font-poppins text-theme-base-content relative z-10 flex min-h-screen flex-col antialiased`}>
				<div className='flex-1'>{children}</div>
				<DotsBackground />
				<Toaster />
			</body>
		</html>
	);
}
