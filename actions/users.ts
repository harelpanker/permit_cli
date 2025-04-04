'use server';

import { getSupabaseAuth } from '@/lib/auth';
import { Provider } from '@supabase/supabase-js';

export const loginAction = async (provider: Provider) => {
	const isProduction = process.env.NODE_ENV === 'production';
	const baseUrl = isProduction ? 'https://deploy-preview-1--permicli.netlify.app' : 'http://localhost:3000';

	try {
		const { data, error } = await (
			await getSupabaseAuth()
		).signInWithOAuth({
			provider,
			options: {
				redirectTo: `${baseUrl}/api/auth/`,
			},
		});

		if (error) throw error;

		return { errorMessage: null, url: data.url };
	} catch (error) {
		return { errorMessage: 'Error login in' };
	}
};
