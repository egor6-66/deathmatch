'use client';

import { redirect } from 'next/navigation';

import { paths } from '@/shared/constants';

const ServerPage = () => {
    // const router = useRouter();
    // useEffect(() => {
    //     router.replace(paths.server.CREATE);
    // }, []);
    redirect(paths.server.CREATE);

    return null;
};

export default ServerPage;
