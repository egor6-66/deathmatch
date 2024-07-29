'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '@/shared/animations';
import { Loading } from '@/shared/ui';

import { Canvas, homeStore } from './utils';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const wallIsReady = homeStore.use.wallIsReady();
    const homePageCoords = homeStore.use.homePageCoords();

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

            <Canvas />
        </>
    );
};

export default HomeLayout;
