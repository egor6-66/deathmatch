import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

import { SetCoords } from '../../utils';

import styles from './styles.module.scss';

const FindServerView = () => {
    return (
        <div className={styles.findServerPage}>
            <Link href={paths.server.CREATE}>go to Create server</Link>

            <SetCoords from={'SERVER'} to={'MAIN'}>
                <Link href={paths.home.MAIN}>Back</Link>
            </SetCoords>
        </div>
    );
};

export default FindServerView;
