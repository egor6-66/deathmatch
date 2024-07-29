import { ServersList } from '@/shared/components';
import { GameServer } from '@/shared/interfaces';

import styles from './styles.module.scss';

interface IProps {
    servers?: GameServer.IGameServer[];
}

const MyServersView = (props: IProps) => {
    const { servers } = props;

    return (
        <div className={styles.myServersPage}>
            <ServersList servers={servers} />
        </div>
    );
};

export default MyServersView;
