import { Poppins, IBM_Plex_Mono, Inter } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
});

export const ibmPlexMono = IBM_Plex_Mono({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-ibm',
});

export const inter = Inter({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});
