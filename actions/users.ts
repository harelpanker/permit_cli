'use server';

import { getSupabaseAuth } from '@/lib/auth';
import { Provider } from '@supabase/supabase-js';

export const loginAction = async (provider: Provider) => {
	try {
		const { data, error } = await (
			await getSupabaseAuth()
		).signInWithOAuth({
			provider,
			options: {
				redirectTo: `https://deploy-preview-1--permicli.netlify.app/api/auth/`,
			},
		});

		if (error) throw error;

		return { errorMessage: null, url: data.url };
	} catch (error) {
		return { errorMessage: 'Error login in' };
	}
};
