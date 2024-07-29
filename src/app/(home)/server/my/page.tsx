'use client';

import { gameServersApi } from '@/shared/gql';

import MyServersView from './view';

const MyServersPage = () => {
    const viewerServers = gameServersApi.getViewerServers();
    const getServer = gameServersApi.getServer();

    const handleServerClick = async (id: number) => {
        // const server = await getServer({ variables: { id } });
    };

    return <MyServersView servers={viewerServers.data?.servers} handleServerClick={handleServerClick} />;
};

export default MyServersPage;
