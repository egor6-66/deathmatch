'use client';

import { gameServersApi } from '@/shared/gql';

import MyServersView from './view';

const MyServersPage = () => {
    const viewerServers = gameServersApi.getViewerServers();

    return <MyServersView servers={viewerServers.data?.servers} />;
};

export default MyServersPage;
