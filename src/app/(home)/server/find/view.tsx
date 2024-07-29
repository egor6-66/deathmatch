import { ServersList } from '@/shared/components';
import { GameServer } from '@/shared/interfaces';

import styles from './styles.module.scss';
interface IProps {
    servers?: GameServer.IGameServer[];
}

const FindServerView = (props: IProps) => {
    const { servers } = props;

    return (
        <div className={styles.findServerPage}>
            <ServersList servers={servers} />
        </div>
    );
};

export default FindServerView;
