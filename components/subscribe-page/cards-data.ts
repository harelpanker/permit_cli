import { StaticImageData } from 'next/image';
import imageMobile1 from '@/assets/subscribe-page/cards-section/card-mobile-1.svg';
import imageMobile2 from '@/assets/subscribe-page/cards-section/card-mobile-2.svg';
import imageMobile3 from '@/assets/subscribe-page/cards-section/card-mobile-3.svg';
import imageMobile4 from '@/assets/subscribe-page/cards-section/card-mobile-4.svg';
import imageMobile5 from '@/assets/subscribe-page/cards-section/card-mobile-5.svg';
import imageDesktop1 from '@/assets/subscribe-page/cards-section/card-desktop-1.svg';
import imageDesktop2 from '@/assets/subscribe-page/cards-section/card-desktop-2.svg';
import imageDesktop3 from '@/assets/subscribe-page/cards-section/card-desktop-3.svg';
import imageDesktop4 from '@/assets/subscribe-page/cards-section/card-desktop-4.svg';
import imageDesktop5 from '@/assets/subscribe-page/cards-section/card-desktop-5.svg';

export type CradProps = {
	date: string;
	livestreamLink: string;
	blogLink: string;
	watchLivestremLink: string;
	imageDesktop: StaticImageData;
	imageMobile: StaticImageData;
	cardColor: string;
	title: string;
	textTop: string;
	list: string[];
	textBottom: string;
};

export const cardsData = [
	{
		date: '21/04',
		livestreamLink: 'https://lu.ma/plkwvl5v',
		blogLink: '',
		watchLivestremLink: '',
		imageDesktop: imageDesktop1,
		imageMobile: imageMobile1,
		cardColor: '#FFDCC3',
		title: 'Full CI/CD Support for Authorization',
		textTop:
			"Add authorization to your CI/CD workflows with the Permit.io CLI. Automate policy deployment, environment setup, and testing right from your pipeline. <br class='hidden md:block' />In this session, we'll demonstrate how you can:",
		list: [
			'Manage environments with CLI commands',
			'Deploy policy updates via GitHub Actions',
			'Integrate policy control with Terraform',
		],
		textBottom: 'For automating security across the entire SDLC.',
	},
	{
		date: '22/04',
		livestreamLink: 'https://lu.ma/ky30z875',
		blogLink: '',
		watchLivestremLink: '',
		imageDesktop: imageDesktop2,
		imageMobile: imageMobile2,
		cardColor: '#DAC3FF',
		title: 'Fine-Grained Authorization Redefined',
		textTop:
			"Redefine fine-grained authorization with Permit.io's CLI and natural language commands. Set up policies in minutes, no need for extra tools or manual configuration. <br class='hidden md:block' />In this session, we'll demonstrate how you can:",
		list: [
			'Generate policies using plain English',
			'Walk through setup with the interactive policy wizard',
			'Enforce policies directly in your codebase',
		],
		textBottom: 'Fast, flexible authorization control from your terminal.',
	},
	{
		date: '23/04',
		livestreamLink: 'https://lu.ma/h3dz6yz8',
		blogLink: '',
		watchLivestremLink: '',
		imageDesktop: imageDesktop3,
		imageMobile: imageMobile3,
		cardColor: '#FFDCC3',
		title: 'Zero-Effort Policy Testing',
		textTop:
			"Test your authorization policies with zero friction, right from your CLI. Run unit, integration, and E2E tests to catch issues before deployment. <br class='hidden md:block' />In this session, we'll demonstrate how you can:",
		list: [
			'Validate policy logic with unit tests',
			'Run integration tests across your system',
			'Simulate real user flows with E2E tests',
		],
		textBottom: 'Designed for developers who need confidence in their policies, without slowing down.',
	},
	{
		date: '24/04',
		livestreamLink: 'https://lu.ma/tnogkouo',
		blogLink: '',
		watchLivestremLink: '',
		imageDesktop: imageDesktop4,
		imageMobile: imageMobile4,
		cardColor: '#FA934E',
		title: 'API-First Authorization',
		textTop:
			"Add authorization to your APIs using OpenAPI and the Permit.io CLI. Generate and manage access policies directly from your API specs. <br class='hidden md:block' />In this session, we'll demonstrate how you can:",
		list: [
			'Create policies from OpenAPI specs',
			'Use -x extensions to embed rules in your docs',
			'Map endpoints with URL-based permissions',
		],
		textBottom: 'API-first authorization without the manual overhead.',
	},
	{
		date: '25/04',
		livestreamLink: 'https://lu.ma/gekpc41k',
		blogLink: '',
		watchLivestremLink: '',
		imageDesktop: imageDesktop5,
		imageMobile: imageMobile5,
		cardColor: '#DAC3FF',
		title: 'A Better Rego Experience',
		textTop:
			"Take control with custom Rego and GitOps-powered policy management. Define, version, and test policies, all through the Permit.io CLI. <br class='hidden md:block' />In this session, we'll demonstrate how you can:",
		list: [
			'Sync and manage policies via Git',
			'Customize logic with Rego extensions',
			'Test rules before deploying to production',
		],
		textBottom: 'Ideal for flexibility without sacrificing structure.',
	},
];
