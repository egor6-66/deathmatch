import { ServersList } from '@/shared/components';
import { GameServer } from '@/shared/interfaces';

import styles from './styles.module.scss';
interface IProps {
    servers?: GameServer.IGameServer[];
    handleServerClick: (id: number) => void;
}

const FindServerView = (props: IProps) => {
    const { servers, handleServerClick } = props;

    return (
        <div className={styles.findServerPage}>
            <ServersList servers={servers} handleServerClick={handleServerClick} />
        </div>
    );
};

export default FindServerView;
