import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import PROTECTED_ROUTES from './constant/protectedRoutes';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isLogin = request.cookies.get('token')?.value;
  const userRole = request.cookies.get('role')?.value;
  const tokenExpirationCookie = request.cookies.get('token_expire');

  const loginTime = tokenExpirationCookie
    ? parseInt(tokenExpirationCookie.value)
    : 0; // Parse the token expiration value
  // const currentTime = new Date(Date.now());
  const currentTime = new Date().getTime();
  const halfHourInMillis = 30 * 60 * 1000; // 30 minutes in milliseconds

  // console.log('Current Time:', currentTime);
  // console.log('Remaini Time:', loginTime + halfHourInMillis);
  // console.log(loginTime + halfHourInMillis < currentTime);
  // console.log(currentTime > tokenExpiration);

  const isProtected = PROTECTED_ROUTES.some((value) =>
    url.pathname.includes(value)
  );

  // Check if the token is expired
  // const isTokenExpired = currentTime > currentTime + 5;
  const hasPassedHalfHour = loginTime + halfHourInMillis < currentTime;

  if (!isLogin || hasPassedHalfHour) {
    if (isProtected) {
      url.pathname = '/auth/login';
      return NextResponse.redirect(url);
    }
  } else {
    if (userRole === 'user' && request.nextUrl.pathname.startsWith('/admin')) {
      // todo: setup role based authorization of routes
      // assure only admin have access to this page
      url.pathname = '/user';
      return NextResponse.redirect(url);
      // return NextResponse.rewrite(new URL('/admin/dashboard', request.url));
    }
  }

  //   return NextResponse.redirect(new URL('/home', request.url));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/(admin)/:path*',
// };
