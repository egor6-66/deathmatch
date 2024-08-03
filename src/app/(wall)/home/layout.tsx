'use client';

import { ReactNode, useEffect } from 'react';

import { HomeSubProvider } from '@/providers';
import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';

import { transitionStore } from '../_utils';

import { Header } from './_components';

const HomeLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();

    const wall = transitionStore.use.wall().value;

    useEffect(() => {
        wall?.page && onRoute({ href: { ...paths.home, ...paths.auth }[wall?.page] });
    }, [wall?.page]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <HomeSubProvider>
                <Header />
                <Transition transition={{ duration: 0.35 }} {...wall?.animations}>
                    {children}
                </Transition>
            </HomeSubProvider>
        </div>
    );
};

export default HomeLayout;
