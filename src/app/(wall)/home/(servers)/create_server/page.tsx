'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { paths } from '@/shared/constants';
import { gameServersApi } from '@/shared/gql';
import { Input } from '@/shared/ui';

// import { UniqueServerModal } from './_components';
import CreateServerView from './view';

const CreateServerPage = () => {
    const router = useRouter();
    const [createServer] = gameServersApi.createServer();

    const name = Input.use({ cut: /\s/ });
    const password = Input.use({ cut: /\s/ });
    // const errorModal = Modal.use<{ errorMessage: string }>();

    const handleCreateServer = useCallback(async () => {
        // try {
        const res = await createServer({ variables: { password: password.value, name: name.value } });
        router.replace(`${paths.game.BATTLEFIELD}/${res.data?.newServer.id}`);
        // }
        // catch (e: Error) {
        //     return errorModal.open({ errorMessage: e.message });
        // }
    }, [name.value, password.value]);

    return (
        <>
            {/*<UniqueServerModal {...errorModal} />*/}
            <CreateServerView inputs={{ name, password }} handleCreateServer={handleCreateServer} />
        </>
    );
};

export default CreateServerPage;
