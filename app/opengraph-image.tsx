import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const imageData = await fetch(
	new URL(
		'https://cdn.prod.website-files.com/666c7f094ef448a50760aaec/67f03444ed02cd60af0a1c46_og-base-image.png',
		import.meta.url
	)
).then((res) => res.arrayBuffer());
const imagePlaceholderData = await fetch(
	new URL(
		'https://cdn.prod.website-files.com/666c7f094ef448a50760aaec/67f034449240b59d204f3837_placeholder.png',
		import.meta.url
	)
).then((res) => res.arrayBuffer());

const fontData = await fetch(
	new URL('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
	return new ImageResponse(
		(
			<div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
				<img width={1296} height={675} src={imageData as unknown as string} alt='OG Image' />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						position: 'absolute',
						top: '14%',
						left: 0,
						width: '100%',
						height: '100%',
						gap: '1rem',
						alignItems: 'flex-end',
						paddingRight: '11%',
						color: '#FEFCFB',
						fontFamily: '"IBM Plex Mono"',
					}}>
					<img width={342} height={342} src={imagePlaceholderData as unknown as string} alt='OG Image' />
					<div>Johnantan Doesonevsky</div>
				</div>
			</div>
		),
		{
			width: 1296,
			height: 675,
			fonts: [
				{
					name: 'IBM Plex Mono',
					data: fontData,
					style: 'normal',
				},
			],
		}
	);
}
