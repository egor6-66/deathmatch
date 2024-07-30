'use client';

import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { gameServersApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

import CreateServerView from './view';

const CreateServerPage = () => {
    const router = useRouter();
    const createServer = gameServersApi.createServer();

    const name = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    const handleCreateServer = async () => {
        try {
            const res = await createServer({ password: password.value, name: name.value });
            router.replace(`${paths.game.BATTLEFIELD}/${res.data?.newServer.url}`);
        } catch (e) {
            return null;
        }
    };

    return <CreateServerView inputs={{ name, password }} handleCreateServer={handleCreateServer} />;
};

export default CreateServerPage;
