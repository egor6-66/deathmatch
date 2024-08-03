'use client';

import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { gameServersApi } from '@/shared/gql';

import MyServersView from './view';

const MyServersPage = () => {
    const router = useRouter();
    const viewerServers = gameServersApi.getViewerServers();

    const handleServerClick = async (id: number) => {
        router.push(`${paths.game.BATTLEFIELD}/${id}`);
    };

    return <MyServersView servers={viewerServers.data?.viewerServers} handleServerClick={handleServerClick} />;
};

export default MyServersPage;
