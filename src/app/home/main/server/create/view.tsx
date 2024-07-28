import { paths } from '@/shared/constants';
import { Link } from '@/shared/ui';

import { SetCoords } from '../../../utils';

import styles from './styles.module.scss';

const CreateServerView = () => {
    return (
        <div className={styles.createServerPage}>
            <Link href={paths.server.FIND}>go to Find server</Link>

            <SetCoords from={'SERVER'} to={'MENU'}>
                <Link href={paths.main.MENU}>Back</Link>
            </SetCoords>
        </div>
    );
};

export default CreateServerView;
