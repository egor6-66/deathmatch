import { ServersList } from '@/shared/components';
import { GameServer } from '@/shared/interfaces';

import styles from './styles.module.scss';

interface IProps {
    servers?: GameServer.IGameServer[];
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
