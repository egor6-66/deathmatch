'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '@/shared/animations';
import { ContentSwitcher } from '@/shared/ui';

import navItems from './navItems';

import styles from './styles.module.scss';

const ServerLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    return (
        <div className={styles.serverLayout}>
            <ContentSwitcher items={navItems()}>
                <RoutingTransition animationTrigger={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} mode={'wait'}>
                    {children}
                </RoutingTransition>
            </ContentSwitcher>
        </div>
    );
};

export default ServerLayout;
