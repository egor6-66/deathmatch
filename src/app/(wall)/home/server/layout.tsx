'use client';

import { ReactNode, useEffect } from 'react';

import { ContentSwitcher } from '@/shared/components';
import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';
import { transitionStore } from '@/shared/stores';

import navItems from './navItems';

import styles from './styles.module.scss';

const ServerLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();

    const server = transitionStore.use.server();
    const page = server.value?.page;

    useEffect(() => {
        onRoute({ href: paths.server[page || 'CREATE'] });
    }, [page]);

    return (
        <div className={styles.serverLayout}>
            <ContentSwitcher items={navItems()}>
                <Transition transition={{ duration: 0.35 }} {...server.value?.animations}>
                    {children}
                </Transition>
            </ContentSwitcher>
        </div>
    );
};

export default ServerLayout;
