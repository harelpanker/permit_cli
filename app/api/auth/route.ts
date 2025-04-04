// import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
// import { type CookieOptions, createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get('code');
	// if "next" is in param, use it as the redirect URL
	const next = searchParams.get('next') ?? '/subscribe';

	// if (code) {
	// 	const cookieStore = cookies();
	// 	const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
	// 		cookies: {
	// 			async get(name: string) {
	// 				return (await cookieStore).get(name)?.value;
	// 			},
	// 			async set(name: string, value: string, options: CookieOptions) {
	// 				(await cookieStore).set({ name, value, ...options });
	// 			},
	// 			async remove(name: string, options: CookieOptions) {
	// 				(await cookieStore).delete({ name, ...options });
	// 			},
	// 		},
	// 	});
	// 	const { error } = await supabase.auth.exchangeCodeForSession(code);
	// 	if (!error) {
	// 		return NextResponse.redirect(`${origin}${next}`);
	// 	}
	// }

	if (code) {
		const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
			const isLocalEnv = process.env.NODE_ENV === 'development';
			if (isLocalEnv) {
				// we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
				return NextResponse.redirect(`${origin}${next}`);
			} else if (forwardedHost) {
				return NextResponse.redirect(`https://${forwardedHost}${next}`);
			} else {
				return NextResponse.redirect(`${origin}${next}`);
			}
		}
	}

	// return the user to an error page with instructions
	return NextResponse.redirect(`${origin}`);
}
