import { ImageResponse } from 'next/og';

// import x from '../../public/og-base-image.png'

export const runtime = 'edge';

// const toUserArray = (ticket: string) => {
// 	try {
// 		return atob(decodeURIComponent(ticket))?.split(' ');
// 	} catch (e) {
// 		console.log(e);
// 		return ['', '', ''];
// 	}
// };

export default async function Image({ params }: { params: { ticket: string } }) {
	// const user = toUserArray(params.ticket);
	const fontData = await fetch(new URL('../../public/fonts/ibm.ttf', import.meta.url)).then((res) => res.arrayBuffer());

	const imageData = await fetch(new URL('../../public/og-base-image.png', import.meta.url)).then((res) =>
		res.arrayBuffer()
	);
	const imageTopIcon = await fetch(new URL('../../public/top-icon.png', import.meta.url)).then((res) =>
		res.arrayBuffer()
	);
	const imagePlaceholderData = await fetch(new URL('../../public/placeholder.png', import.meta.url)).then((res) =>
		res.arrayBuffer()
	);

	return new ImageResponse(
		(
			<div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
				<img width={1200} height={630} src={imageData as unknown as string} alt='OG Image' />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						position: 'absolute',
						top: '14%',
						left: 0,
						width: '100%',
						height: '100%',
						alignItems: 'flex-end',
						paddingRight: 75,
						color: '#FEFCFB',
						fontFamily: '"IBM Plex Mono"',
					}}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: 406, fontSize: '2.4rem' }}>
						<img
							style={{ margin: '0 auto' }}
							width={370}
							height={342}
							src={imagePlaceholderData as unknown as string}
							alt='OG Image'
						/>
						<div>Johnantan Doesonevsky</div>
					</div>
					<div style={{ position: 'absolute', top: -30, right: 80, display: 'flex' }}>
						<img width={63} height={58} src={imageTopIcon as unknown as string} alt='OG Image' />
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Times',
					data: fontData,
					style: 'normal',
				},
			],
		}
	);
}
