'use client';

import { gameServersApi } from '@/shared/gql';

import FindServerView from './view';

const FindServerPage = () => {
    const servers = gameServersApi.getAllServers();
    const getServer = gameServersApi.getServer();

    const handleServerClick = async (id: number) => {
        await getServer({ variables: { id } });
    };

    return <FindServerView servers={servers.data?.allServers} handleServerClick={handleServerClick} />;
};

export default FindServerPage;
