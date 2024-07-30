'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { usePageTransition } from '@/shared/hooks';
import { Loading } from '@/shared/ui';

import Canvas, { Pages } from './canvas';
import homePagesStore from './store';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();

    const pathname = usePathname();
    const [wallIsReady, setWallIsReady] = useState(false);

    const animations = homePagesStore.use.animations();
    const location = homePagesStore.use.location();
    const page = location.value?.page || pathname.split('/')[1].toUpperCase();

    useEffect(() => {
        location.value?.url && onRoute({ href: location.value.url });
    }, [location.value?.url]);

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
