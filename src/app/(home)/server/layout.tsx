'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '@/shared/animations';
import { paths } from '@/shared/constants';
import { ContentSwitcher, ContentSwitcherTypes, Link } from '@/shared/ui';

import { homeStore, SetCoords } from '../utils';

import styles from './styles.module.scss';

const ServerLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const homeAnimations = homeStore.use.homeAnimations();
    const currentPath = pathname.split('/')[2];

    const items: ContentSwitcherTypes.IItems[] = [
        {
            id: 0,
            element:
                currentPath === 'create' ? (
                    <Link onMouseEnter={homeAnimations.clear} href={paths.server.FIND}>
                        go to FIND servers
                    </Link>
                ) : (
                    <Link href={paths.server.CREATE}>go to CREATE servers</Link>
                ),
        },
        {
            id: 1,
            element: (
                <SetCoords from={'SERVER'} to={'MAIN'}>
                    <Link href={paths.home.MAIN}>go to menu</Link>
                </SetCoords>
            ),
        },
    ];

    return (
        <div className={styles.serverLayout}>
            <ContentSwitcher items={items}>
                <RoutingTransition animationTrigger={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} mode={'wait'}>
                    {children}
                </RoutingTransition>
            </ContentSwitcher>
        </div>
    );
};

export default ServerLayout;
