'use client';

import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { gameServersApi } from '@/shared/gql';

import FindServerView from './view';

const FindServerPage = () => {
    const router = useRouter();

    const servers = gameServersApi.allServers().query();
    const getServer = gameServersApi.getServer();

    const handleServerClick = async (id: number) => {
        const res = await getServer({ variables: { id } });
        router.replace(`${paths.game.BATTLEFIELD}/${res.data?.server.url}`);
    };

    return <FindServerView servers={servers?.data?.allServers} handleServerClick={handleServerClick} />;
};

export default FindServerPage;
