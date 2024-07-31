'use client';

import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Header } from '@/shared/components';
import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';
import { transitionStore } from '@/shared/stores';
import { Loading } from '@/shared/ui';

import Canvas from './canvas';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();
    const pathname = usePathname();
    const [wallIsReady, setWallIsReady] = useState(false);

    const home = transitionStore.use.home();
    const page = home.value?.page || pathname.split('/')[1].toUpperCase();

    useEffect(() => {
        onRoute({ href: paths.home[page] });
    }, [page]);

    return (
        <>
            <Loading isVisible={!wallIsReady} fullScreen>
                DEATHMATCH
            </Loading>
            {paths.PrivateKeys.includes(page) && <Header />}
            <Transition style={{ height: 'calc(100% - 40px)' }} transition={{ duration: 0.35 }} {...home.value?.animations}>
                {children}
            </Transition>
            <Canvas page={page as paths.HomePagesTypes} setWallIsReady={setWallIsReady} />
        </>
    );
};

export default HomeLayout;
