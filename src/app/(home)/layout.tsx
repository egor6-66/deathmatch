'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { RoutingTransition } from '@/shared/animations';
import { Loading } from '@/shared/ui';

import { Canvas, homeStore } from './utils';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const wallIsReady = homeStore.use.wallIsReady();
    const homeAnimations = homeStore.use.homeAnimations();

    const pathname = usePathname();

    return (
        <>
            <Loading isVisible={!wallIsReady.value}>DEATHMATCH</Loading>
            {homeAnimations.value ? (
                <RoutingTransition animationTrigger={pathname} {...homeAnimations.value}>
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
