import UserIn from '@/components/home-page/user-in';
import { getUser } from '@/lib/auth';

export default async function SubscribePage() {
	const user = await getUser();
	const name = user?.user_metadata?.full_name;

	return <UserIn name={name} />;
}
