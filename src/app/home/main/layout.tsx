'use client';

import { ReactNode } from 'react';

import Header from './header';

import styles from './styles.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.mainLayout}>
            <header className={styles.header}>
                <Header />
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
