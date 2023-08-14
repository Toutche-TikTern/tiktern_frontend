import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import PROTECTED_ROUTES from './constant/protectedRoutes';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isLogin = request.cookies.get('token')?.value;
  const userRole = request.cookies.get('role')?.value;
  // console.log(userRole);
  const isProtected = PROTECTED_ROUTES.some((value) =>
    url.pathname.includes(value)
  );
  console.log('heyyyy', !isLogin);
  if (!isLogin) {
    if (isProtected) {
      url.pathname = '/auth/login';
      return NextResponse.redirect(url);
    }
  } else {
    // if (!userRole && userRole === 'user') {
    //   url.pathname = '/user';
    //   alert('You are not authorized to access this page.');
    //   return NextResponse.redirect(url);
    // }
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
