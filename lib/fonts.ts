import { Poppins, IBM_Plex_Mono, Inter } from 'next/font/google';

export const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const ibmPlexMono = IBM_Plex_Mono({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const inter = Inter({
	weight: ['400'],
	subsets: ['latin'],
});
