'use client';

import { ReactNode, useEffect } from 'react';

import { HomeSubProvider } from '@/providers';
import { Header } from '@/shared/components';
import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';
import { transitionStore } from '@/shared/stores';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();

    const wall = transitionStore.use.wall().value;

    useEffect(() => {
        onRoute({ href: { ...paths.home, ...paths.auth }[wall.page] });
    }, [wall.page]);

    return (
        <HomeSubProvider>
            <Header />
            <Transition style={{ height: 'calc(100% - 40px)' }} transition={{ duration: 0.35 }} {...wall?.animations}>
                {children}
            </Transition>
        </HomeSubProvider>
    );
};

export default HomeLayout;
