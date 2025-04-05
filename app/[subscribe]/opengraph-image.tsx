import { ImageResponse } from 'next/og';
import { getUser } from '@/lib/auth';

export const runtime = 'edge';

export default async function Image() {
	const user = await getUser();
	const name = user?.user_metadata?.full_name;
	const avatar = user?.user_metadata?.avatar_url;

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
						<div style={{ display: 'flex', maxWidth: 270 }}>{name}</div>
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
