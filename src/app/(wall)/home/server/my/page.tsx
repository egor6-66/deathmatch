'use client';

import { gameServersApi } from '@/shared/gql';

import MyServersView from './view';

const MyServersPage = () => {
    const viewerServers = gameServersApi.getViewerServers();
    const getServer = gameServersApi.getServer();

    const handleServerClick = async (id: number) => {
        await getServer({ variables: { id } });
    };

    return <MyServersView servers={viewerServers.data?.viewerServers} handleServerClick={handleServerClick} />;
};

export default MyServersPage;
