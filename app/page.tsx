import { Fragment } from 'react';
import UserIn from '@/components/home-page/user-in';
import UserOut from '@/components/home-page/user-out';
import { getUser } from '@/lib/auth';

export default async function HomePage() {
	const user = await getUser();
	const name = user?.user_metadata?.full_name;

	return <Fragment>{name ? <UserIn name={name} /> : <UserOut />}</Fragment>;
}
