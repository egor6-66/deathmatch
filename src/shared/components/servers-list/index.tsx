import React from 'react';

import { GameServer } from '@/shared/interfaces';

import styles from './styles.module.scss';

interface IProps {
    servers?: GameServer.IGameServer[];
    handleServerClick: (id: number) => void;
}

const ServersList = (props: IProps) => {
    const { servers, handleServerClick } = props;

    return (
        <ul className={styles.serversList}>
            {servers?.map((i) => (
                <li key={i.id} className={styles.item} onClick={() => handleServerClick(i.id)}>
                    <span className={styles.name}>{i.name}</span>
                    <span className={styles.private}>{i.private ? 'ПРИВАТНЫЙ' : 'ОТКРЫТЫЙ'}</span>
                </li>
            ))}
        </ul>
    );
};

export default ServersList;
