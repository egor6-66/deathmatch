'use client';

import { ReactNode } from 'react';

import { Loading } from '@/shared/ui';

import Canvas, { homePagesStore } from './canvas';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const wallIsReady = homePagesStore.use.wallIsReady();

    return (
        <>
            <Loading isVisible={!wallIsReady.value} fullScreen>
                DEATHMATCH
            </Loading>
            {children}
            <Canvas />
        </>
    );
};

export default HomeLayout;
