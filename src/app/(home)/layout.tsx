'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '@/shared/animations';
import { HomePagesCanvas } from '@/shared/components';
import { homePagesStore } from '@/shared/stores';
import { Loading } from '@/shared/ui';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const wallIsReady = homePagesStore.use.wallIsReady();
    const homePageCoords = homePagesStore.use.homePageCoords();

    const pathname = usePathname();

    return (
        <>
            <Loading isVisible={!wallIsReady.value} fullScreen>
                DEATHMATCH
            </Loading>
            {homePageCoords.value ? (
                <RoutingTransition animationTrigger={pathname} {...homePageCoords.value}>
                    {children}
                </RoutingTransition>
            ) : (
                children
            )}

            <HomePagesCanvas />
        </>
    );
};

export default HomeLayout;
