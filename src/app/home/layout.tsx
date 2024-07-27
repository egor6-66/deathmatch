'use client';

import { ReactNode } from 'react';

import { Loading } from '@/shared/ui';

import { Canvas, homeStore, RoutingTransition } from './utils';

const Layout = ({ children }: { children: ReactNode }) => {
    const wallIsReady = homeStore.use.wallIsReady();

    return (
        <>
            <Loading isVisible={!wallIsReady.value}>DEATHMATCH</Loading>
            <RoutingTransition>{children}</RoutingTransition>
            <Canvas />
        </>
    );
};

export default Layout;
