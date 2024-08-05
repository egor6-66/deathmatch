import React from 'react';
import { redirect } from 'next/navigation';

import { paths } from '@/shared/constants';

const NotFound = () => {
    redirect(paths.home.MAIN);

    return <div>NotFound</div>;
};

export default NotFound;
