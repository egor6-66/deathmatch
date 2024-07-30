'use client';

import { ReactNode } from 'react';

import { ContentSwitcher } from '@/shared/components';

import navItems from './navItems';

import styles from './styles.module.scss';

const ServerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.serverLayout}>
            <ContentSwitcher items={navItems()}>{children}</ContentSwitcher>
        </div>
    );
};

export default ServerLayout;
