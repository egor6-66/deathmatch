'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { gameServersApi } from '@/shared/gql';

import styles from './styles.module.scss';

const Battlefield = () => {
    const params = useParams();

    const [getServer, { data: serverData }] = gameServersApi.server().lazyQuery;
    const subscribeToServer = gameServersApi.server().subscribe;
    const [joinServer] = gameServersApi.joinServer();
    const [leaveServer] = gameServersApi.leaveServer();

    useEffect(() => {
        joinServer({ variables: { id: +params.id } }).then(async () => {
            await getServer({ variables: { id: +params.id } });
            subscribeToServer();
        });

        return () => {
            leaveServer({ variables: { id: +params.id } });
        };
    }, []);

    return (
        <main className={styles.battlefieldPage}>
            battlefield
            {serverData?.server.users.map((i) => (
                <div key={i.id}>{i.nickname}</div>
            ))}
        </main>
    );
};

export default Battlefield;
