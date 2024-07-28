'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { Loading } from '@/shared/ui';

import { Canvas, homeStore, RoutingTransition } from './utils';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const wallIsReady = homeStore.use.wallIsReady();
    const pageCoords = homeStore.use.pageCoords();

    const pathname = usePathname();

    return (
        <>
            <Loading isVisible={!wallIsReady.value}>DEATHMATCH</Loading>
            <RoutingTransition
                animationTrigger={pathname.split('/')[3]}
                initial={pageCoords.value?.initial}
                animate={pageCoords.value?.animate}
                exit={pageCoords.value?.exit}
            >
                {children}
            </RoutingTransition>
            <Canvas />
        </>
    );
};

export default HomeLayout;
