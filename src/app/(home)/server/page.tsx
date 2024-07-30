import { redirect } from 'next/navigation';

import { paths } from '@/shared/constants';

const ServerPage = () => {
    redirect(paths.server.CREATE);

    return null;
};

export default ServerPage;
