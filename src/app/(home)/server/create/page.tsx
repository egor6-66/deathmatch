'use client';

import { gameServersApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

import CreateServerView from './view';

const CreateServerPage = () => {
    const createServer = gameServersApi.createServer();

    const name = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });

    const handleCreateServer = async () => {
        await createServer({ password: password.value, name: name.value });
    };

    return <CreateServerView inputs={{ name, password }} handleCreateServer={handleCreateServer} />;
};

export default CreateServerPage;
