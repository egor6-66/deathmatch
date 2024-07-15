'use client';

import { ReactNode } from 'react';

import { RoutingTransitionEffect } from '@/components/effects';
import { motionStore } from '@/stores';

function Layout({ children }: { children: ReactNode }) {
    const homePagesMotion = motionStore.use.homePagesMotion();

    return <RoutingTransitionEffect motionVariant={homePagesMotion.value}>{children}</RoutingTransitionEffect>;
}

export default Layout;
