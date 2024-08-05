import { userApi } from '@/shared/gql';

import styles from './styles.module.scss';

const Header = () => {
    const viewer = userApi.getViewer();

    return <header className={styles.header}>{viewer.data?.viewer.nickname}</header>;
};

export default Header;
