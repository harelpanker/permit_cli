// import { createServerClient, type CookieOptions } from '@supabase/ssr';
// import { NextResponse, type NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
// 	let response = NextResponse.next({
// 		request: {
// 			headers: request.headers,
// 		},
// 	});

// 	const path = new URL(request.url).pathname;
// 	const user = await getUser(request, response);

// 	const publicPaths = ['/', '/api/auth'];

// 	if (!publicPaths.includes(path) && !path.includes('opengraph-image') && !user) {
// 		return NextResponse.redirect(new URL('/', request.url));
// 	}

// 	if (user) {
// 		const userSlug = btoa(`${user?.user_metadata?.user_name} ${user?.user_metadata?.full_name}`);

// 		if (path === '/' || (path !== '/api/auth' && path !== `/${userSlug}` && !path.includes('opengraph-image'))) {
// 			// Redirect logged-in users to their personal page
// 			const url = request.nextUrl.clone();
// 			url.pathname = `/${userSlug}`;
// 			return NextResponse.redirect(url);
// 		}
// 	}

// 	return response;
// }

// export const config = {
// 	matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
// };

// async function getUser(request: NextRequest, response: NextResponse) {
// 	const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
// 		cookies: {
// 			get(name: string) {
// 				return request.cookies.get(name)?.value;
// 			},
// 			set(name: string, value: string, options: CookieOptions) {
// 				request.cookies.set({
// 					name,
// 					value,
// 					...options,
// 				});
// 				response = NextResponse.next({
// 					request: {
// 						headers: request.headers,
// 					},
// 				});
// 				response.cookies.set({
// 					name,
// 					value,
// 					...options,
// 				});
// 			},
// 			remove(name: string, options: CookieOptions) {
// 				request.cookies.set({
// 					name,
// 					value: '',
// 					...options,
// 				});
// 				response = NextResponse.next({
// 					request: {
// 						headers: request.headers,
// 					},
// 				});
// 				response.cookies.set({
// 					name,
// 					value: '',
// 					...options,
// 				});
// 			},
// 		},
// 	});

// 	return (await supabase.auth.getUser()).data.user;
// }

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	});

	const path = new URL(request.url).pathname;
	const user = await getUser(request, response);

	const publicPaths = ['/', '/api/auth'];

	// if (path === '/subscribe' && !user) {
	// 	return NextResponse.redirect(new URL('/', request.url));
	// }

	if (!publicPaths.includes(path) && !path.includes('opengraph-image') && !user) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	// Handle authenticated users who should be redirected to their personal page
	if (user) {
		const userSlug = btoa(`${user?.user_metadata?.user_name} ${user?.user_metadata?.full_name}`);

		if (
			request.nextUrl.pathname === '/' ||
			(request.nextUrl.pathname !== '/api/auth' &&
				request.nextUrl.pathname !== `/${userSlug}` &&
				!request.nextUrl.pathname.includes('opengraph-image'))
		) {
			// Redirect logged-in users to their personal page
			const url = request.nextUrl.clone();
			url.pathname = `/${userSlug}`;
			return NextResponse.redirect(url);
		}
	}

	return response;
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|.\\.(?:svg|png|jpg|jpeg|gif|webp)$).)'],
};

async function getUser(request: NextRequest, response: NextResponse) {
	const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
		cookies: {
			get(name: string) {
				return request.cookies.get(name)?.value;
			},
			set(name: string, value: string, options: CookieOptions) {
				request.cookies.set({
					name,
					value,
					...options,
				});
				response = NextResponse.next({
					request: {
						headers: request.headers,
					},
				});
				response.cookies.set({
					name,
					value,
					...options,
				});
			},
			remove(name: string, options: CookieOptions) {
				request.cookies.set({
					name,
					value: '',
					...options,
				});
				response = NextResponse.next({
					request: {
						headers: request.headers,
					},
				});
				response.cookies.set({
					name,
					value: '',
					...options,
				});
			},
		},
	});

	return (await supabase.auth.getUser()).data.user;
}
