'use client';

import { ReactNode, useEffect } from 'react';

import { paths } from '@/shared/constants';
import { usePageTransition } from '@/shared/hooks';

import { transitionStore } from '../_utils';

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const { onRoute, Transition } = usePageTransition();

    const wall = transitionStore.use.wall().value;

    useEffect(() => {
        wall?.page && onRoute({ href: { ...paths.home, ...paths.auth }[wall?.page] });
    }, [wall?.page]);

    return (
        <Transition transition={{ duration: 0.35 }} {...wall?.animations}>
            {children}
        </Transition>
    );
};

export default AuthLayout;
