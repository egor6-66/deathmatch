import { ReactNode } from 'react';

import styles from './styles.module.scss';

function Layout({ children }: { children: ReactNode }) {
    return <div className={styles.layout}>{children}</div>;
}

export default Layout;
