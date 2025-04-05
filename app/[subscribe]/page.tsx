import { Metadata } from 'next';
import UserIn from '@/components/home-page/user-in';
import { getUser } from '@/lib/auth';
import { generateMetadata } from '@/lib/metadata';

const user = await getUser();
const name = user?.user_metadata?.full_name;

export const metadata: Metadata = generateMetadata({
	canonicalUrl: '/subscribe',
	image: '/subscribe/opengraph-image.png',
});

export default async function SubscribePage() {
	return <UserIn name={name} />;
}
