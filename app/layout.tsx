import './globals.css';
import type { Metadata } from 'next';
import { ibmPlexMono, poppins, inter } from '@/lib/fonts';
import { generateMetadata } from '@/lib/metadata';
import { ChildrenProps } from '@/lib/type-children';
import DotsBackground from '@/components/layout/dots-background';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({ children }: Readonly<ChildrenProps>) {
	return (
		<html className={`${ibmPlexMono.variable} ${poppins.variable} ${inter.variable} scroll-smooth`} lang='en' dir='ltr'>
			<body className={`font-poppins text-theme-base-content relative z-10 flex min-h-screen flex-col antialiased`}>
				<div className='flex-1'>{children}</div>
				<DotsBackground />
				<Toaster />
			</body>
		</html>
	);
}
