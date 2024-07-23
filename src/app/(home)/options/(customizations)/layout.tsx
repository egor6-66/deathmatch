import { ReactNode } from 'react';

import styles from './styles.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
    return <div className={styles.layout}>{children}</div>;
};

export default Layout;
