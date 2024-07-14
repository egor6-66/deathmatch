'use client';

import { ReactNode } from 'react';

import { RoutingTransitionEffect } from '@/components/effects';

import routingTransitionStore from './routingTransitionStore';

function Layout({ children }: { children: ReactNode }) {
    const motion = routingTransitionStore.use.motion();

    return <RoutingTransitionEffect motionVariant={motion.value}>{children}</RoutingTransitionEffect>;
}

export default Layout;
