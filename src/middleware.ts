import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { paths } from '@/shared/constants';

export async function middleware(request: NextRequest) {
    const accessToken = cookies().get('accessToken')?.value;
    const refreshToken = cookies().get('refreshToken')?.value;

    if (paths.privatePaths.find((path) => request.url.includes(process.env.HOST + path))) {
        if (!accessToken && !refreshToken) {
            return NextResponse.redirect(new URL(paths.auth.LOGIN, request.url));
        }
    }

    if (paths.publicPaths.find((path) => request.url.includes(process.env.HOST + path))) {
        if (accessToken) {
            return NextResponse.redirect(new URL(paths.home.MAIN, request.url));
        }
    }
}
export const config = {
    matcher: '/:path*',
};
