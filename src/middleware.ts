import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

import { paths } from '@/shared/constants';

export async function middleware(request: NextRequest) {
    const accessToken = cookies().get('accessToken')?.value;
    const refreshToken = cookies().get('refreshToken')?.value;

    if (Object.values(paths.main).find((path) => request.url.includes(path))) {
        if (!accessToken && !refreshToken) {
            // return NextResponse.redirect(new URL(paths.auth.LOGIN, request.url));
        }
    }
}
export const config = {
    matcher: '/:path*',
};
