import { NextResponse } from 'next/server';

export function middleware(request: {
  cookies: { has: (arg0: string) => boolean };
  nextUrl: { pathname: string; clone: () => any };
  url: string | URL | undefined;
}) {
  const auth = request.cookies.has('refreshToken');

  // 인증이 없을 경우, 로그인 페이지로 리디렉션
  if (!auth) {
    // 현재 요청 URL을 기반으로 /login 경로로 리디렉션 URL 생성
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 인증이 있을 경우, 원래의 요청 URL로 계속 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/explore', '/message', '/notify', '/mypage', '/message/:path*'],
};
