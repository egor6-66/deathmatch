'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '@/shared/animations';
import { paths } from '@/shared/constants';
import { ContentSwitcher, ContentSwitcherTypes, Link } from '@/shared/ui';

import { SetCoords } from '../../utils';

import styles from './styles.module.scss';

const ServerLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();

    const currentPath = pathname.split('/')[4];

    const items: ContentSwitcherTypes.IItems[] = [
        {
            id: 0,
            element:
                currentPath === 'create' ? (
                    <Link href={paths.server.FIND}>go to FIND servers</Link>
                ) : (
                    <Link href={paths.server.CREATE}>go to CREATE servers</Link>
                ),
        },
        {
            id: 1,
            element: (
                <SetCoords from={'SERVER'} to={'MENU'}>
                    <Link href={paths.main.MENU}>go to menu</Link>
                </SetCoords>
            ),
        },
    ];

    return (
        <div className={styles.serverLayout}>
            <ContentSwitcher items={items}>
                <RoutingTransition animationTrigger={currentPath} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} mode={'wait'}>
                    {children}
                </RoutingTransition>
            </ContentSwitcher>
        </div>
    );
};

export default ServerLayout;
