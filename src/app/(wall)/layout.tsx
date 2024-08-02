'use client';

import { ReactNode, useState } from 'react';

import { transitionStore } from '@/shared/stores';
import { Loading } from '@/shared/ui';

import Canvas from './canvas';

const WallLayout = ({ children }: { children: ReactNode }) => {
    const [wallIsReady, setWallIsReady] = useState(false);

    const wall = transitionStore.use.wall();

    return (
        <>
            <Loading isVisible={!wallIsReady} fullScreen>
                DEATHMATCH
            </Loading>
            {children}
            <Canvas page={wall.value.page} setWallIsReady={setWallIsReady} />
        </>
    );
};

export default WallLayout;
