import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { paths } from '@/shared/constants';

export async function middleware(request: NextRequest) {
    const accessToken = cookies().get('accessToken')?.value;
    const refreshToken = cookies().get('refreshToken')?.value;

    if (Object.values(paths.main).find((path) => request.url.includes(path))) {
        if (!accessToken && !refreshToken) {
            return NextResponse.redirect(new URL(paths.auth.LOGIN, request.url));
        }
    }

    if (Object.values(paths.auth).find((path) => request.url.includes(path))) {
        if (accessToken) {
            return NextResponse.redirect(new URL(paths.main.MENU, request.url));
        }
    }
}
export const config = {
    matcher: '/:path*',
};
