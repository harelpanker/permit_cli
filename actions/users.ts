'use server';

import { getSupabaseAuth } from '@/lib/auth';
import { Provider } from '@supabase/supabase-js';

export const loginAction = async (provider: Provider) => {
	const url = 'https://deploy-preview-1--permicli.netlify.app';
	// const localhostUrl = 'http://localhost:3000';

	try {
		const { data, error } = await (
			await getSupabaseAuth()
		).signInWithOAuth({
			provider,
			options: {
				redirectTo: `${url}/api/auth/`,
			},
		});

		if (error) throw error;

		return { errorMessage: null, url: data.url };
	} catch (error) {
		return { errorMessage: 'Error login in' };
	}
};
