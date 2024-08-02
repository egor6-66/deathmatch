'use client';

import { redirect, usePathname } from 'next/navigation';

import { paths } from '@/shared/constants';

const ServerPage = () => {
    const pathname = usePathname();
    pathname === paths.home.SERVER && redirect(paths.server.CREATE);

    return null;
};

export default ServerPage;
