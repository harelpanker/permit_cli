import { Metadata } from 'next';
import UserIn from '@/components/home-page/user-in';
import { getUser } from '@/lib/auth';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
	canonicalUrl: '/subscribe',
	image: 'https://permicli.netlify.app/subscribe/opengraph-image',
});

export default async function SubscribePage() {
	const user = await getUser();
	const name = user?.user_metadata?.full_name;

	return <UserIn name={name} />;
}
