'use client';

import { gameServersApi } from '@/shared/gql';

import FindServerView from './view';

const FindServerPage = () => {
    const servers = gameServersApi.getAllServers();

    return <FindServerView servers={servers.data?.allServers} />;
};

export default FindServerPage;
