'use server';

import { getSupabaseAuth } from '@/lib/auth';
import { Provider } from '@supabase/supabase-js';
import { headers } from 'next/headers';

export const loginAction = async (provider: Provider) => {
	try {
		const headersList = headers();
		const host = (await headersList).get('host');

		if (!host) {
			console.error('Login Action Error: Host header is missing.');
			return { errorMessage: 'Configuration error: Cannot determine application host.' };
		}
		const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

		const baseUrl = `${protocol}://${host}`;
		const redirectTo = `${baseUrl}/api/auth/`;

		const supabase = await getSupabaseAuth();
		const { data, error } = await supabase.signInWithOAuth({
			provider,
			options: {
				redirectTo: redirectTo,
			},
		});

		if (error) {
			console.error('Supabase OAuth Error:', error.message);
			throw error;
		}

		return { errorMessage: null, url: data.url };
	} catch (error) {
		console.error('Login Action Error:', error instanceof Error ? error.message : error);
		return { errorMessage: 'Error logging in. Please try again.' };
	}
};
