'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';
import { Loading } from '@/shared/ui';

import Canvas, { Pages } from './canvas';
import homePagesStore from './store';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();

    const pathname = usePathname();
    const [wallIsReady, setWallIsReady] = useState(false);

    const animations = homePagesStore.use.animations();
    const page = homePagesStore.use.page().value || pathname.split('/')[1].toUpperCase();

    useEffect(() => {
        onRoute({ href: paths.home[page] });
    }, [page]);

    return (
        <>
            <Loading isVisible={!wallIsReady} fullScreen>
                DEATHMATCH
            </Loading>
            <Transition transition={{ duration: 0.35 }} {...animations.value}>
                {children}
            </Transition>
            <Canvas page={page as Pages} setWallIsReady={setWallIsReady} />
        </>
    );
};

export default HomeLayout;
