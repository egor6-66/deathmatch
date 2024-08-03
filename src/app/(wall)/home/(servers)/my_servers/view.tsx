'use client';

import { GameServer } from '@/shared/interfaces';

import { ServersList } from '../_components';

import styles from './styles.module.scss';

interface IProps {
    servers?: GameServer.WithOutFields<'users'>[];
    handleServerClick: (id: number) => void;
}

const MyServersView = (props: IProps) => {
    const { servers, handleServerClick } = props;

    return (
        <div className={styles.myServersPage}>
            <ServersList servers={servers} handleServerClick={handleServerClick} />
        </div>
    );
};

export default MyServersView;
