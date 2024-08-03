'use client';

import { ReactNode, useState } from 'react';

import { Loading } from '@/shared/ui';

import Canvas from './_components/canvas';
import { transitionStore } from './_utils';

const WallLayout = ({ children }: { children: ReactNode }) => {
    const [wallIsReady, setWallIsReady] = useState(false);

    const wall = transitionStore.use.wall().value;

    return (
        <>
            <Loading isVisible={!wallIsReady} fullScreen>
                DEATHMATCH
            </Loading>
            {children}
            <Canvas page={wall?.page} setWallIsReady={setWallIsReady} />
        </>
    );
};

export default WallLayout;
