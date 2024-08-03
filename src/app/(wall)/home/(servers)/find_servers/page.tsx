'use client';

import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { gameServersApi } from '@/shared/gql';

import FindServerView from './view';

const FindServerPage = () => {
    const router = useRouter();

    const servers = gameServersApi.allServers().query();

    const handleServerClick = async (id: number) => {
        router.replace(`${paths.game.BATTLEFIELD}/${id}`);
    };

    return <FindServerView servers={servers?.data?.allServers} handleServerClick={handleServerClick} />;
};

export default FindServerPage;
