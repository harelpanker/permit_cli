export default function DotsBackground() {
	return (
		<div
			style={{
				backgroundImage: 'radial-gradient(rgba(238,212,195,1) 1px,rgba(253,243,236,1) 1px)',
				backgroundSize: '24px 24px',
			}}
			className='pointer-events-none absolute inset-0 h-full w-full'></div>
	);
}
