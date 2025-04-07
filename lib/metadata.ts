import { Metadata } from 'next';

const SITE_URL = 'https://permicli.netlify.app/';
const SITE_TITLE = 'Permit.io CLI Launch Week';
const SITE_DESCRIPTION = 'Developer-First Integrated Authorization';
const CANONICAL_URL = '/';
const SITE_NAME = 'Permit.io CLI Launch Week';

export function generateMetadata({
	title,
	description,
	canonicalUrl,
}: {
	title?: string;
	description?: string;
	canonicalUrl?: string;
}): Metadata {
	return {
		title: title ? title : SITE_TITLE,
		description: description ? description : SITE_DESCRIPTION,
		generator: SITE_NAME,
		applicationName: SITE_NAME,
		referrer: 'origin-when-cross-origin',
		creator: SITE_NAME,
		metadataBase: new URL(SITE_URL),
		alternates: {
			canonical: canonicalUrl ? canonicalUrl : CANONICAL_URL,
			languages: {
				'en-US': '/en-US',
			},
		},
		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	};
}
